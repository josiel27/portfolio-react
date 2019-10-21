import React from "react";
import "./Config.css";
const Config = props => {
  console.log(props.resumeData);

  // Get the modal
  var modal = document.getElementById("myModal");

  // When the user clicks the button, open the modal
  let btnClick = function() {
    let pss = prompt("Digite a senha para configurar o portfólio");
    pss == "123" ? (modal.style.display = "block") : alert("Password invalido");
  };

  // When the user clicks on <span> (x), close the modal
  let spanClick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.click = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div>
      <h2>Bottom Modal</h2>

      <button onClick={btnClick} id="btn">
        Open Modal
      </button>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={spanClick}>
              &times;
            </span>
            <h2>Modal Header</h2>
          </div>
          <div className="modal-body">
            <form>
              <label>aboutme</label>
              <input type="text" value={props.aboutme}></input>
              <label>address</label>
              <label>education (2)</label>
              <label>imagebaseurl</label>
              <label>linkedinId</label>
              <label>name</label>
              <label>portfolio (4)</label>
              <label>role</label>
              <label>roleDescription</label>
              <label>skills (3)</label>
              <label>skillsDescription</label>
              <label>skypeid</label>
              <label>socialLinks (3) </label>
              <label>testimonials (2)</label>
              <label>website</label>
              <label>work (2)</label>
            </form>
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
