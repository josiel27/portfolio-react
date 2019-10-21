import firebaseDatabase from "../utils/firebaseUtils";

export default class FirebaseService {
  static getDataList = (nodePath, callback, size = 10) => {
    let query = firebaseDatabase.ref(nodePath).limitToLast(size);
    query.on("value", dataSnapshot => {
      let items = [];
      dataSnapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item["key"] = childSnapshot.key;
        items.push(item);
      });
      callback(items);
    });
  };

  static getData = (nodePath, callback) => {
    let query = firebaseDatabase.ref(nodePath);
    query.on("value", dataSnapshot => {
      callback(dataSnapshot.val());
    });
  };

  static pushData = (node, objToSubmit) => {
    const ref = firebaseDatabase.ref(node);
    // const id = firebaseDatabase.ref(node).push().key;
    ref.set(objToSubmit);
  };

  static remove = (id, node) => {
    return firebaseDatabase.ref(node + '/' + id).remove();
};
}
