import React, { useState } from "react";
import "./components/stil.css";
import Yap from "./components/Yap";

function App() {


  // ===================== useState ================
  const [userInput, setUserInput] = useState("");
  const [yapilacaklar, setYapilacaklar] = useState([]);

  // ========================== handleEkle ======================
  const handleEkle = function (olay) {
    olay.preventDefault();

    if (userInput.replaceAll(" ", "").length === 0) return;

    const zaman = new Date();

    const yapilacak = {
      text: userInput,
      // zaman: `${("0" + zaman.getDate()).slice(-2)}--${zaman.getFullYear()} <->, ${(0+zaman.getHours()).slice(-2)}:${(0+zaman.getMinutes()).slice(-2)}:${(0+zaman.getSeconds()).slice(-2)}`,

      zaman: `${("0" + zaman.getDate()).slice(-2)}/${(
        "0" +
        (zaman.getMonth() + 1)
      ).slice(-2)}/${zaman.getFullYear()} <-> ${("0" + zaman.getHours()).slice(
        -2
      )}:${("0" + zaman.getMinutes()).slice(-2)}:${(
        "0" + zaman.getSeconds()
      ).slice(-2)}`,

      id: zaman.getTime(),
      isDone: false,
      isEdit: false,
    };

    setYapilacaklar([...yapilacaklar, yapilacak]);

    setUserInput("");
  };




  // ======================== handleDeleteAll ==============

  const handleDeleteAll = function () {
    let geciciDizi = yapilacaklar.filter(item => item.isDone === false);
    setYapilacaklar(geciciDizi);
  }


  //================ RETURN====================
  return (
    <div className="App">
      <h1 className="text-center m-5">Yapılacaklar Listesi 2</h1>

      <div className="container">
        <form onSubmit={handleEkle}>
          <div className="input-group" id="inputGroup">
            <input
              // id="inputAlani"
              type="text"
              className="form-control"
              placeholder="Görev giriniz"
              value={userInput}
              onChange={(olay) => {
                setUserInput(olay.target.value);
                // Deger=olay.target.value;
              }}
            />

            <button className="btn btn-success" type="submit">
              <span className="material-symbols-outlined">add</span>
            </button>

            <button className="btn btn-outline-danger" type="button" onClick={handleDeleteAll}>
              <span className="material-symbols-outlined">auto_delete</span>
            </button>
          </div>
        </form>

        <div>
          {yapilacaklar.map((item) => (
            <Yap yapObj={item} tumYap={yapilacaklar} setTumYap={setYapilacaklar} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
