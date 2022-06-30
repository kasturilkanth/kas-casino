// import { useState } from "react";
import "./Content.css";
// import gamePopup from "./gamePopup";

function Content({ handleStart }) {
  return (
    <>
      <div className="Content">
        <table>
          <h3>RESULT TABLE</h3>
          <tr>
            <th>ID</th>
            <th>SLOT</th>
            <th>TIME</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
        <button className="start-btn" onClick={handleStart}>
          Start Game
        </button>
      </div>
    </>
  );
}
export default Content;
