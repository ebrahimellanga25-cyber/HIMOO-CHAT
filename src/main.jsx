
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("ذكر");

  function handlePhoto(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  }

  function save(e) {
    e.preventDefault();

    localStorage.setItem("himoo_profile", JSON.stringify({
      photo, name, birth, gender
    }));

    alert("تم حفظ البيانات بنجاح");
  }

  return (
    <div style={{
      background:"#100c20",
      color:"white",
      minHeight:"100vh",
      padding:25,
      fontFamily:"Arial",
      textAlign:"center"
    }}>
      <h1 style={{color:"#c084fc"}}>HIMOO CHAT</h1>
      <h2>إنشاء حساب جديد</h2>
      <p>أكمل بياناتك للانضمام إلينا</p>

      <form onSubmit={save}>
        <div style={{margin:25}}>
          {photo && <img src={photo} alt="الصورة الشخصية"
            style={{width:110,height:110,borderRadius:"50%",objectFit:"cover"}} />}
          <p>الصورة الشخصية</p>
          <input type="file" accept="image/*" onChange={handlePhoto} />
        </div>

        <input
          placeholder="الاسم"
          value={name}
          onChange={e=>setName(e.target.value)}
          required
          style={style}
        />

        <p>تاريخ الميلاد</p>
        <input
          type="date"
          value={birth}
          onChange={e=>setBirth(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          required
          style={style}
        />

        <p>الجنس</p>
        <select
          value={gender}
          onChange={e=>setGender(e.target.value)}
          style={style}
        >
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
        </select>

        <button type="submit" style={{
          ...style,
          background:"#9333ea",
          color:"white",
          fontWeight:"bold"
        }}>
          حفظ ومتابعة
        </button>
      </form>
    </div>
  );
}

const style = {
  display:"block",
  width:"100%",
  maxWidth:400,
  boxSizing:"border-box",
  padding:14,
  margin:"12px auto",
  borderRadius:10,
  fontSize:16
};

createRoot(document.getElementById("root")).render(<App />);
