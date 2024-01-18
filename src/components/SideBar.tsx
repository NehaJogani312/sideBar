import { Link } from 'react-router-dom'
import style from '../styles/sideBar.module.css'
import logoImg from '../assets/logo.svg'
import { PiFolderDuotone, PiCaretCircleUpDown, PiBriefcaseDuotone, PiBinocularsDuotone, PiLockKeyDuotone, PiShieldCheckDuotone, PiCubeDuotone, PiShoppingCartSimpleDuotone, PiHeadsetDuotone, PiHammerDuotone, PiAirplaneTiltDuotone, PiNoteBlank, PiBellRingingDuotone, PiCurrencyCircleDollarDuotone, PiGridFourDuotone, PiChartBarDuotone, PiShootingStarDuotone, PiRocketLaunchDuotone, PiCurrencyDollarBold, PiStepsDuotone, PiCalendarPlusBold, PiCreditCardDuotone, PiDatabaseDuotone, PiLeafDuotone, PiMapPinLineDuotone, PiChartLineUpLight } from "react-icons/pi";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { AiTwotoneMail, AiTwotoneHome } from "react-icons/ai";
import { GrDocumentLocked } from 'react-icons/gr';
import { MdOutlineAccountCircle, MdOutlineMessage } from "react-icons/md";
import { BsGrid, BsCardList } from "react-icons/bs";
import { GoPerson, GoCreditCard } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiListOrdered2 } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import { useState } from 'react';

const SideBar = () => {

  const [activeLink, setActiveLink] = useState<string | null>("/");
  const [dropdownVisibility, setDropdownVisibility] = useState<{ [key: string]: boolean }>({
    '/commerce': false,
    '/support': false,
    '/invoice': false,
  });
  const handleClick = (link: string) => {
    setActiveLink(link);

  }

  const ClickDropDown = (link: string) => {
    setActiveLink(link);
    setDropdownVisibility((prevVisibility) => ({
      ...Object.keys(prevVisibility).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [link]: !prevVisibility[link],
    }));
  }

  const commerce = activeLink === '/product' || activeLink === '/productDetails' || activeLink === '/creatProduct' || activeLink === '/editProduct' || activeLink === '/categories' || activeLink === '/createCategory' || activeLink === '/editCategory' || activeLink === '/reviews' ? style.active : '' || activeLink === '/shop' || activeLink === '/cart' || activeLink === '/checkoutPayment';
  const support = activeLink === '/inbox' || activeLink === '/snippets' || activeLink === '/templates';
  const invoice = activeLink === '/list' || activeLink === '/details' || activeLink === '/create' || activeLink === '/edit';
  const logistics = activeLink === '/shipmentList' || activeLink === '/shipmentdetails' || activeLink === '/createShipment' || activeLink === '/Shipment' || activeLink === '/customerProfile' || activeLink === '/tracking';
  return (
    <>
      <div className={style.sideBar}>
        <div className={style.fixLogo}>
          <Link to="/" className={style.logo}>
            <img src={logoImg} alt="logo image" />
          </Link>
        </div>
        <div className={style.bottomSide}>
          <h6>Overview</h6>
          <Link to="/" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/' ? style.active : ''}`} onClick={() => handleClick('/')}><PiFolderDuotone className={`${activeLink === '/' ? style.active : ''} ${style.icon}`} /> <span>File Manager</span></Link>
          <Link to="/executive" className={`${style.sidebarJusti} ${activeLink === '/executive' ? style.active : ''}`} onClick={() => handleClick('/executive')}><div className={style.sidebarLink}><PiBriefcaseDuotone className={`${style.icon} ${activeLink === '/executive' ? style.active : ''}`} /> <span>Executive</span></div><span className={style.new}>New</span></Link>
          <Link to="/financial" className={`${style.sidebarJusti} ${activeLink === '/financial' ? style.active : ""}`} onClick={() => { handleClick('/financial') }}><div className={style.sidebarLink} ><PiCurrencyCircleDollarDuotone className={`${style.icon} ${activeLink === '/financial' ? style.active : ''}`} />  <span>Financial</span></div><span className={style.new}>New</span></Link>
          <Link to="/logistics" className={`${style.sidebarLink} ${activeLink === '/logistics'}`} onClick={() => handleClick("/logistics")}><PiCubeDuotone className={`${style.icon} ${activeLink === '/logistics' ? style.active : ''}`} /><span>Logistics</span></Link>
          <Link to="/ecommerce" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === "/ecommerce" ? style.active : ''}`} onClick={() => { handleClick('/ecommerce') }}><PiShoppingCartSimpleDuotone className={`${style.icon} ${activeLink === '/ecommerce' ? style.active : ''}`} /> <span>E-Commerce</span></Link>
          <Link to="/analytics" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === "/analytics" ? style.active : ''}`} onClick={() => handleClick("/analytics")}><PiChartBarDuotone className={`${style.icon} ${activeLink === '/analytics' ? style.active : ''}`} /> <span>Analytics</span></Link>
          <Link to="/support" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === "/support" ? style.active : ''}`} onClick={() => handleClick("/support")}><PiHeadsetDuotone className={`${style.icon} ${activeLink === '/support' ? style.active : ''}`} /> <span>Support</span></Link>
          <h6 className={style.Appkit}>Apps Kit</h6>
          <Link to="/commerce" className={`${style.sidebarJusti} ${commerce ? style.active : ''}`} onClick={() => ClickDropDown("/commerce")} ><div className={style.sidebarLink}><PiShoppingCartSimpleDuotone className={`${style.icon}  ${commerce ? style.active : ''}`} /> <span>E-Commerce</span></div><span> {dropdownVisibility['/commerce'] ? <FaAngleDown /> : <FaAngleRight />}</span> </Link>
          {dropdownVisibility['/commerce'] && (
            <div>
              <Link to="/product" className={`${style.collapse} ${activeLink === '/product' ? style.active : ''}`} onClick={() => handleClick("/product")}>Products</Link>
              <Link to="/productDetails" className={`${style.collapse} ${activeLink === '/productDetails' ? style.active : ''}`} onClick={() => handleClick("/productDetails")}>Product Details</Link>
              <Link to="/creatProduct" className={`${style.collapse} ${activeLink === '/creatProduct' ? style.active : ''}`} onClick={() => handleClick("/creatProduct")}>Create Product</Link>
              <Link to="/editProduct" className={`${style.collapse} ${activeLink === '/editProduct' ? style.active : ''}`} onClick={() => handleClick("/editProduct")}>Edit Product</Link>
              <Link to="/categories" className={`${style.collapse} ${activeLink === '/categories' ? style.active : ''}`} onClick={() => handleClick("/categories")}>Categories</Link>
              <Link to="/createCategory" className={`${style.collapse} ${activeLink === '/createCategory' ? style.active : ''}`} onClick={() => handleClick("/createCategory")}>Create Category</Link>
              <Link to="/editCategory" className={`${style.collapse} ${activeLink === '/editCategory' ? style.active : ''}`} onClick={() => handleClick("/editCategory")}>Edit Category</Link>
              <Link to="/reviews" className={`${style.collapse} ${activeLink === '/reviews' ? style.active : ''}`} onClick={() => handleClick("/reviews")}>Reviews</Link>
              <Link to="/shop" className={`${style.collapse} ${activeLink === '/shop' ? style.active : ''}`} onClick={() => handleClick("/shop")}>Shop</Link>
              <Link to="/cart" className={`${style.collapse} ${activeLink === '/cart' ? style.active : ''}`} onClick={() => handleClick("/cart")}>Cart</Link>
              <Link to="/checkoutPayment" className={`${style.collapse} ${activeLink === '/checkoutPayment' ? style.active : ''}`} onClick={() => handleClick("/checkoutPayment")}>Checkout & Payment</Link>
            </div>
          )}

          <Link to="/support" className={`${style.sidebarJusti} ${support ? style.active : ''}`} onClick={() => ClickDropDown("/support")}><div className={style.sidebarLink}><PiHeadsetDuotone className={`${style.icon} ${support ? style.active : ''}`} /> <span>Support</span></div> <span>{dropdownVisibility['/support'] ? <FaAngleDown /> : <FaAngleRight />}</span></Link>
          {dropdownVisibility['/support'] && (
            <div>
              <Link to="/inbox" className={`${style.collapse} ${activeLink === '/inbox' ? style.active : ''}`} onClick={() => handleClick("/inbox")}>Inbox</Link>
              <Link to="/snippets" className={`${style.collapse} ${activeLink === '/snippets' ? style.active : ''}`} onClick={() => handleClick("/snippets")}>Snippets</Link>
              <Link to="/templates" className={`${style.collapse} ${activeLink === '/templates' ? style.active : ''}`} onClick={() => handleClick("/templates")}>Templates</Link>
            </div>
          )}
          <Link to="/invoice" className={`${style.sidebarJusti} ${invoice ? style.active : ''}`} onClick={() => ClickDropDown("/invoice")}><div className={style.sidebarLink}><PiCurrencyDollarBold className={`${style.icon} ${invoice ? style.active : ''}`} /> <span>Invoice</span></div> <span>{dropdownVisibility['/invoice'] ? <FaAngleDown /> : <FaAngleRight />}</span></Link>
          {dropdownVisibility['/invoice'] && (
            <div>
              <Link to="/list" className={`${style.collapse} ${activeLink === '/list' ? style.active : ''}`} onClick={() => handleClick("/list")}>List</Link>
              <Link to="/details" className={`${style.collapse} ${activeLink === '/details' ? style.active : ''}`} onClick={() => handleClick("/details")}>Details</Link>
              <Link to="/create" className={`${style.collapse} ${activeLink === '/create' ? style.active : ''}`} onClick={() => handleClick("/create")}>Create</Link>
              <Link to="/edit" className={`${style.collapse} ${activeLink === '/edit' ? style.active : ''}`} onClick={() => handleClick("/edit")}>Edit</Link>
            </div>
          )}
          <Link to="/logistics" className={`${style.sidebarJusti} ${logistics ? style.active : ''}`} onClick={() => ClickDropDown("/logistics")}><div className={style.sidebarLink}><PiCubeDuotone className={`${style.icon} ${logistics ? style.active : ''}`} /><span>Logistics</span></div> <span><FaAngleRight /></span></Link>
          {dropdownVisibility['/logistics'] && (
            <div>
              <Link to="/shipmentList" className={`${style.collapse} ${activeLink === '/shipmentList' ? style.active : ''}`} onClick={() => handleClick("/shipmentList")}>Shipment List</Link>
              <Link to="/shipmentdetails" className={`${style.collapse} ${activeLink === '/shipmentdetails' ? style.active : ''}`} onClick={() => handleClick("/shipmentdetails")}>Shipment Details</Link>
              <Link to="/createShipment" className={`${style.collapse} ${activeLink === '/createShipment' ? style.active : ''}`} onClick={() => handleClick("/createShipment")}>Create Shipment</Link>
              <Link to="/Shipment" className={`${style.collapse} ${activeLink === '/Shipment' ? style.active : ''}`} onClick={() => handleClick("/Shipment")}>Edit Shipment</Link>
              <Link to="/customerProfile" className={`${style.collapse} ${activeLink === '/customerProfile' ? style.active : ''}`} onClick={() => handleClick("/customerProfile")}>Customer Profile</Link>
              <Link to="/tracking" className={`${style.collapse} ${activeLink === '/tracking' ? style.active : ''}`} onClick={() => handleClick("/tracking")}>Tracking</Link>

            </div>
          )}
          <Link to="/fileManager" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/fileManager' ? style.active : ''}`} onClick={() => handleClick("/fileManager")}><PiFolderDuotone className={`${style.icon} ${activeLink === '/fileManager' ? style.active : ''}`} /> <span>File Manager</span></Link>
          <Link to="/eventCalendar" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/eventCalendar' ? style.active : ''}`} onClick={() => handleClick("/eventCalendar")}><PiCalendarPlusBold className={`${style.icon} ${activeLink === '/eventCalendar' ? style.active : ''}`} /> <span>Event Calendar</span></Link>
          <Link to="/roles" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/roles' ? style.active : ''}`} onClick={() => handleClick("/roles")}><GrDocumentLocked className={`${style.icon} ${activeLink === '/roles' ? style.active : ''}`} /> <span>Roles & Permissions</span></Link>
          <Link to="/point" className={`${style.sidebarJusti} ${activeLink === '/point' ? style.active : ''}`} onClick={() => handleClick("/point")}><div className={style.sidebarLink} ><PiCreditCardDuotone className={`${style.icon} ${activeLink === '/point' ? style.active : ''}`} /> <span>Point of Sale</span></div><span className={style.update}>Update</span></Link>
          <h6 className={style.Appkit}>SEARCH & FILTERS</h6>
          <Link to="/realEstate" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/realEstate' ? style.active : ''}`} onClick={() => handleClick("/realEstate")}><AiTwotoneHome className={`${style.icon} ${activeLink === '/realEstate' ? style.active : ''}`} /> <span>Real Estate</span></Link>
          <Link to="/flightBook" className={`${style.sidebarJusti} ${activeLink === '/flightBook' ? style.active : ''}`} onClick={() => handleClick("/flightBook")} ><div className={style.sidebarLink}><PiAirplaneTiltDuotone className={`${style.icon} ${activeLink === '/flightBook' ? style.active : ''}`} /> <span>Flight Booking</span></div><span className={style.update}>Update</span></Link>
          <Link to="/nft" className={`${style.sidebarLink} ${activeLink === '/nft' ? style.active : ''}`} onClick={() => handleClick("/nft")}><PiDatabaseDuotone className={`${style.icon} ${activeLink === '/nft' ? style.active : ''}`} /> <span>NFT</span></Link>
          <h6 className={style.Appkit}>WIDGETS</h6>
          <Link to="/cards" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/cards' ? style.active : ''}`} onClick={() => handleClick("/cards")}><BsGrid className={`${style.icon} ${activeLink === '/cards' ? style.active : ''}`} /><span>Cards</span></Link>
          <Link to="/icon" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/icon' ? style.active : ''}`} onClick={() => handleClick("/icon")}><PiLeafDuotone className={`${style.icon} ${activeLink === '/icon' ? style.active : ''}`} /><span>Icons</span></Link>
          <Link to="/charts" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/charts' ? style.active : ''}`} onClick={() => handleClick("/charts")}><PiChartLineUpLight className={`${style.icon} ${activeLink === '/charts' ? style.active : ''}`} /><span>Charts</span></Link>
          <Link to="/maps" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/maps' ? style.active : ''}`} onClick={() => handleClick("/maps")}><PiMapPinLineDuotone className={`${style.icon} ${activeLink === '/maps' ? style.active : ''}`} /><span>Maps</span></Link>
          <Link to="/email" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/email' ? style.active : ''}`} onClick={() => handleClick("/email")}><AiTwotoneMail className={`${style.icon} ${activeLink === '/email' ? style.active : ''}`} /><span>Email Templates</span></Link>
          <h6 className={style.Appkit}>FORMS</h6>
          <Link to="/account" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/account' ? style.active : ''}`} onClick={() => handleClick("/account")}><MdOutlineAccountCircle className={`${style.icon} ${activeLink === '/account' ? style.active : ''}`} /><span>Account Settings</span></Link>
          <Link to="/notification" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/notification' ? style.active : ''}`} onClick={() => handleClick("/notification")}><PiBellRingingDuotone className={`${style.icon} ${activeLink === '/notification' ? style.active : ''}`} /><span>Notification Preference</span></Link>
          <Link to="/personalInfo" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/personalInfo' ? style.active : ''}`} onClick={() => handleClick("/personalInfo")}><GoPerson className={`${style.icon} ${activeLink === '/personalInfo' ? style.active : ''}`} /><span>Personal Information</span></Link>
          <Link to="/newsletter" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/newsletter' ? style.active : ''}`} onClick={() => handleClick("/newsletter")}><HiOutlineMailOpen className={`${style.icon} ${activeLink === '/newsletter' ? style.active : ''}`} /><span>Newsletter</span></Link>
          <Link to="/multiStep" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/multiStep' ? style.active : ''}`} onClick={() => handleClick("/multiStep")}><PiStepsDuotone className={`${style.icon} ${activeLink === '/multiStep' ? style.active : ''}`} /><span>Multi Step</span></Link>
          <Link to="/payment" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/payment' ? style.active : ''}`} onClick={() => handleClick("/payment")}><PiCreditCardDuotone className={`${style.icon} ${activeLink === '/payment' ? style.active : ''}`} /><span>Payment Checkout</span></Link>
          <h6 className={style.Appkit}>TABLES</h6>
          <Link to="/basic" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/basic' ? style.active : ''}`} onClick={() => handleClick("/basic")}><PiGridFourDuotone className={`${style.icon} ${activeLink === '/basic' ? style.active : ''}`} /><span>Basic</span></Link>
          <Link to="/collapsible" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/collapsible' ? style.active : ''}`} onClick={() => handleClick("/collapsible")}><PiCaretCircleUpDown className={`${style.icon} ${activeLink === '/collapsible' ? style.active : ''}`} /><span>Collapsible</span></Link>
          <Link to="/enhanced" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/enhanced' ? style.active : ''}`} onClick={() => handleClick("/enhanced")}><BsCardList className={`${style.icon} ${activeLink === '/enhanced' ? style.active : ''}`} /><span>Enhanced</span></Link>
          <Link to="/stickyHeader" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/stickyHeader' ? style.active : ''}`} onClick={() => handleClick("/stickyHeader")}><GoCreditCard className={`${style.icon} ${activeLink === '/stickyHeader' ? style.active : ''}`} /><span>Sticky Header</span></Link>
          <Link to="/pagination" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/pagination' ? style.active : ''}`} onClick={() => handleClick("/pagination")}><RiListOrdered2 className={`${style.icon} ${activeLink === '/pagination' ? style.active : ''}`} /><span>Pagination</span></Link>
          <Link to="/search" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/search' ? style.active : ''}`} onClick={() => handleClick("/search")}><CgSandClock className={`${style.icon} ${activeLink === '/search' ? style.active : ''}`} /><span>Search</span></Link>
          <h6 className={style.Appkit}>Pages</h6>
          <Link to="/profile" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/profile' ? style.active : ''}`} onClick={() => handleClick("/profile")}><IoPersonCircleOutline className={`${style.icon} ${activeLink === '/profile' ? style.active : ''}`} /><span>Profile</span></Link>
          <Link to="/welcome" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/welcome' ? style.active : ''}`} onClick={() => handleClick("/welcome")}><PiShootingStarDuotone className={`${style.icon} ${activeLink === '/welcome' ? style.active : ''}`} /><span>Welcome</span></Link>
          <Link to="/comingSoon" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/comingSoon' ? style.active : ''}`} onClick={() => handleClick("/comingSoon")}><PiRocketLaunchDuotone className={`${style.icon} ${activeLink === '/comingSoon' ? style.active : ''}`} /><span>Coming soon</span></Link>
          <Link to="/access" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/access' ? style.active : ''}`} onClick={() => handleClick("/access")}><GrDocumentLocked className={`${style.icon} ${activeLink === '/access' ? style.active : ''}`} /><span>Access Denied</span></Link>
          <Link to="/notFound" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/notFound' ? style.active : ''}`} onClick={() => handleClick("/notFound")}><PiBinocularsDuotone className={`${style.icon} ${activeLink === '/notFound' ? style.active : ''}`} /><span>Not Found</span></Link>
          <Link to="/maintenance" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/maintenance' ? style.active : ''}`} onClick={() => handleClick("/maintenance")}><PiHammerDuotone className={`${style.icon} ${activeLink === '/maintenance' ? style.active : ''}`} /><span>Maintenance</span></Link>
          <Link to="/blank" className={`${style.sidebarLink} ${style.linkInner} ${activeLink === '/blank' ? style.active : ''}`} onClick={() => handleClick("/blank")}><PiNoteBlank className={`${style.icon} ${activeLink === '/blank' ? style.active : ''}`} /><span>Blank</span></Link>
          <h6 className={style.Appkit}>Authentication</h6>
          <Link to="/singUp" className={`${style.sidebarJusti} ${activeLink === '/singUp' ? style.active : ''}`}><div className={style.sidebarLink}><MdOutlineAccountCircle className={style.icon} /><span>Sign Up</span></div> <span><FaAngleRight /></span></Link>
          <Link to="/singIn" className={`${style.sidebarJusti} ${activeLink === '/singIn' ? style.active : ''}`}><div className={style.sidebarLink}><PiShieldCheckDuotone className={style.icon} /><span>Sign In</span></div> <span><FaAngleRight /></span></Link>
          <Link to="/forgotPass" className={`${style.sidebarJusti} ${activeLink === '/forgotPass' ? style.active : ''}`}><div className={style.sidebarLink}><PiLockKeyDuotone className={style.icon} /><span>Forgot Password</span></div> <span><FaAngleRight /></span></Link>
          <Link to="/optPage" className={`${style.sidebarJusti} ${activeLink === '/optPage' ? style.active : ''}`}><div className={style.sidebarLink}><MdOutlineMessage className={style.icon} /><span>OTP Pages</span></div> <span><FaAngleRight /></span></Link>
        </div>
      </div>
    </>
  )
}

export default SideBar