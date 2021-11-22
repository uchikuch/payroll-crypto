import logo from "../../assets/images/logo-crypt.svg";
import scroll_icon from "../../assets/images/scroll-icon.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex flex-col overflow-hidden mb-12">
      <div
        className="container grid grid-cols-1 md:grid-cols-4 gap-y-10
    px-4 py-14 text-gray-600 "
      >
        <div className="pl-4 space-y-4 text-md text-gray-800">
          <img className="w-1/2" src={logo} alt="" />
        </div>
        <div className="space-y-4 text-md text-gray-800">
          <h5 className="text-gray-400 mb-12">Home</h5>
          <p>Farms</p>
          <p>Pools</p>
        </div>
        <div className="space-y-4 text-md text-gray-800">
          <h5 className="text-gray-400 mb-12">Support</h5>
          <p>Rank</p>
          <p>Reward</p>
          <p>Privacy & terms</p>
        </div>
        <div className="space-y-4 text-md text-gray-800">
          <h5 className="text-gray-400 mb-12">Community</h5>
          <p>Developers</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="container border-t-2 mt-8"></div>
      <div className="container mt-12 flex justify-between content-between">
        <div className="text-gray-400">© 2021, Cryp.</div>
        <div
          onClick={scrollToTop}
          className="flex justify-items-center cursor-pointer gap-4 mb-12"
        >
          <img className="w-6" src={scroll_icon} alt="" />
          <div
            className="text-gray-400  flex flex-col justify-items-center 
          justify-center content-center"
          >
            <p>Back to top</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
