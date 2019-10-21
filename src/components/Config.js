import React from "react";
import "./Config.css";
const Config = props => {
  console.log(props.resumeData);
  // Get the modal
  var modal = document.getElementById("myModal");

  //   // Get the button that opens the modal
  //   var btn = document.getElementById("myBtn");

  //   // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  let btnClick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  let spanClick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.click = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div>
      <h2>Bottom Modal</h2>

      <button onClick={btnClick} id="btn">
        Open Modal
      </button>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={spanClick}>
              &times;
            </span>
            <h2>Modal Header</h2>
          </div>
          <div class="modal-body">
          {/* <label>{props.resumeData['name']}</label> */}
            {Object.values(props.resumeData).map((obj, i) => {
              return (
                <>
                  <label>{obj}</label>
                  {/* <input type="text" value={props.resumeData.obj}>{props.resumeData.obj}</input> */}
                </>
              );
            })}
          </div>
          <div class="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
