import React from "react";
import Hero from "./Hero";
import CardJurusan from "./CardJurusan";
import gambar1 from "./../assets/tkj.jpg";
import gambar2 from "./../assets/tm.jpg";
import gambar3 from "./../assets/perhotelan.jpg";
import gambar4 from "./../assets/teknikelektro.jpg";
import gambar5 from "./../assets/tataboga.jpeg";
import Kegiatan from "./Kegiatan";
import kegiatan1 from "./../assets/kegiatan1.jpg";
import kegiatan2 from "./../assets/kegiatan2.jpg";

const MainContent = () => {
  return (
    <>
      <Hero />;
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1 id="action2">Jurusan</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-12 mb-2">
            <CardJurusan gambar={gambar1} jurusan="TKJ" />
          </div>
          <div className="col-md-4 col-sm-12 mb-2">
            <CardJurusan gambar={gambar2} jurusan="Teknik Mesin" />
          </div>
          <div className="col-md-4 col-sm-12 mb-2">
            <CardJurusan gambar={gambar3} jurusan="Perhotelan" />
          </div>
          <div className="col-md-4 col-sm-12 mb-2">
            <CardJurusan gambar={gambar5} jurusan="Tata Boga" />
          </div>
          <div className="col-md-4 col-sm-12 mb-2">
            <CardJurusan gambar={gambar4} jurusan="Teknik Elektro" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Kegiatan</h1>
          </div>
          <div className="col-12 mb-2">
            <Kegiatan
              gambar={kegiatan1}
              descr="Kegiatan rutin upacara bendera untuk menghormati jasa para pahlawan yang telah gugur"
            />
          </div>
          <div className="col-12 mb-2">
            <Kegiatan
              gambar={kegiatan2}
              descr="Kerja bakti membersihkan selokan dalam rangka HUT Kemerdekaan yang ke 75 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
