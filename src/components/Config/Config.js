import React, { Component } from "react";
import "./Config.css";
class Config extends Component {
  // let pss = prompt("Digite a senha para configurar o portfólio");
  // pss == "123" ? (modal.style.display = "block") : alert("Password invalido");

  render() {
    let resumeData = this.props.resumeData;
    console.log(resumeData)
    return (
      <div className="config">
        <h2>Bottom Modal</h2>

        <form>
          <label>aboutme</label>
          <textarea>{resumeData.aboutme}</textarea>

          <label>address</label>
          <input type="text" value={resumeData.aboutme}></input>

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
    );
  }
}

export default Config;
