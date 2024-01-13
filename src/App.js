import "./App.css";

function App() {
  return (
    <>
      <div className="heroseccontainer">
        <div className="herotop">
          <div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="herotitle"
          >
            Stunning HDR Photos <br /> using cutting-edge AI Technology, <br />
            delivered Instantly
          </div>
          <div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="herodescription w-2/4"
          >
            Our nationwide network of real estate photographers can capture
            stunning photos, deliver instantly on site, at a price more
            affordable than traditional photography.
          </div>
          <h2 class="text-4xl lg:text-5xl text-white font-bold mb-8 commingsoon capitalize">
            Our apps are coming soon...
          </h2>
          <p class="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12 staytuned">
            Stay tuned for updates and get ready for an extraordinary
            experience!
          </p>
        </div>
        <div className="herobottom">
          {/* <img className="iphoneimg" src={iphone} alt="" /> */}
          {/* <div className="mainherimgiphone flex">
        <img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 40 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="iphoneimgsize1"
          src={firstiphone1}
          alt=""
        />
        <img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 25 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="iphoneimgsize2"
          src={firstiphone2}
          alt=""
        />
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="iphoneimgsize3"
          src={firstiphone3}
          alt=""
        />
        <img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: -25 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="iphoneimgsize4"
          src={firstiphone4}
          alt=""
        />
        <img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: -40 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="iphoneimgsize5"
          src={firstiphone5}
          alt=""
        />
      </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
