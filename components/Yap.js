import React, { useState } from "react";

function Yap(props) {
  const { yapObj, tumYap, setTumYap } = props;

  //=========================useState====================
  const [editText, setEditText] = useState(yapObj.text);

  //=========================handleDone==============================
  const handleDone = function () {
    let gecici = { ...yapObj, isDone: !yapObj.isDone };
    let geciciDizi = [];
    tumYap.map((item) => {
      if (item.id === yapObj.id) {
        geciciDizi = [...geciciDizi, gecici];
      } else {
        geciciDizi = [...geciciDizi, item];
      }
      return null;
    });
    setTumYap(geciciDizi);
    // console.log("çalıştı")
  };

  //=======handleDelete=======================================================
  const handleDelete = function () {
    let geciciDizi = tumYap.filter((item) => yapObj.id !== item.id);
    setTumYap(geciciDizi);
  };

  //=======handleEdit=======================================================
  const handleEdit = function () {
    let geciciDizi = [...tumYap];
    geciciDizi.map((item) =>
      item.id === yapObj.id ? (item.isEdit = !yapObj.isEdit) : null
    );
    if (yapObj.isEdit=== true){
      setEditText(yapObj.text)
    }
    setTumYap(geciciDizi);
  };

  //=======RETURN=======================================================
  return (
    <div>
      {console.log("çalıştı " + yapObj.isDone)}
      <div
        // id="alertBox"
        className={`alert ${
          yapObj.isDone ? "alert-secondary" : "alert-primary"
        }`}
        role="alert"
      >
        <div className="d-flex justify-content-between">
          {yapObj.isEdit ? (
            <form className="input-group mr-3" onSubmit={() => {
              let geciciObj={...yapObj, isEdit:false, text: editText};

              let geciciDizi=[];

              tumYap.map((item) => {if (item.id === yapObj.id) {
                geciciDizi = [...geciciDizi, geciciObj];
              }else{
                geciciDizi = [...geciciDizi,item]
              }})
              setTumYap(geciciDizi)


            }}>
              <input
                id="formControl"
                type="text"
                className="form-control"
                // placeholder="Recipient's username"
                value={editText}
                onChange={(olay) => setEditText(olay.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                <span className="material-symbols-outlined">check_circle</span>
              </button>
            </form>
          ) : (
            <p className={` ${yapObj.isDone ? "gorevDone" : "gorev"}`}>
              {yapObj.text}
            </p>
          )}

          <div className="btn-group">
            {/* ==================== Button Done ================= */}
            <button
              type="button"
              className={`${yapObj.isEdit ? "invisible": "visible"} "btn btn-primary" `}
              onClick={handleDone}
            >
              {yapObj.isDone ? (
                <span className="material-symbols-outlined">
                  incomplete_circle
                </span>
              ) : (
                <span className="material-symbols-outlined">done</span>
              )}
            </button>
            {/* ================= Button Edit ================ */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEdit}
            >
              {yapObj.isEdit ? (
                <span className="material-symbols-outlined">close</span>
              ) : (
                <span className="material-symbols-outlined">edit</span>
              )}
            </button>


            {/* ================= Button Delete===============*/}
            <button
              type="button"
              className={`${yapObj.isEdit ? "invisible": "visible"} "btn btn-primary" `}
              onClick={handleDelete}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yap;
