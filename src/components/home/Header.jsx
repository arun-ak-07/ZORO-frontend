import React, { useContext, useState } from 'react'
import TwoHeadingsSlide from './TwoHeadingsSlide'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import DropdownBox from './DropdownBox'
import { FaAngleDown } from 'react-icons/fa'
import DropdownBox1 from './DropdownBox1'
import PopOverSearchButton from './PopoverSearchButton'
import myVideo from '../home/ZORO.gif';
import { myContext } from '../context/Context'
import DropDown from './DropDown'

const Header = () => {

    const { newCategory, setNewCategory,products,searchItem } = useContext(myContext)

    const heading1 = 'NOW ENJOY ALL INDIA FREE SHIPPING ON EVERY ORDER'; // First heading text
    const heading2 = 'EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENTS'; // Second heading text
    const interval = 3000; // Interval between heading changes (in milliseconds)
    const [isShopByAnimeHovered, setIsShopByAnimeHovered] = useState(false);
    const [isShopByProducts, setIsShopByProducts] = useState(false);

    const nav = useNavigate()
    const category=[...new Set(products.map(data=>data.category))]
  return (
    <>
    <div className="header01" class="bg-primary text-white header01" style={{ display: 'flex', flexDirection: 'row' }}>
                    <TwoHeadingsSlide heading1={heading1}  heading2={heading2} interval={interval} />
                </div>

                <div className="header02">
                    <div className="headerLeft1">
                        <div style={{ fontSize: '16px', paddingLeft: '100px' }} >
                            <Link to={('/')}><img src={myVideo} alt='ZORO' height={65} width={65}/></Link>
                        </div>
                        <Navbar expand="lg" variant="dark" style={{ width: '100%', height: '100%' }}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" style={{
                                    display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', marginTop: '16px', marginLeft: '100px'
                                }}>
                                    <Nav.Link><p className="headerTitles1">HOME</p></Nav.Link>
                                    <Nav.Link
                                        onMouseEnter={() => setIsShopByProducts(true)}
                                        onMouseLeave={() => setIsShopByProducts(false)}
                                        style={{ position: 'relative', display: 'flex', alignItems: 'center' }} // Set position relative to parent link and align items to center
                                    >
                                        <p className="headerTitles1">SHOP BY PRODUCTS</p> {isShopByProducts ? <FaAngleDown style={{ marginBottom: '20px' }} /> : <FaAngleDown style={{ marginBottom: '20px' }} />}
                                        {isShopByProducts && <DropdownBox1 onMouseEnter={() => setIsShopByProducts(true)} onMouseLeave={() => setIsShopByProducts(false)} />} {/* Render dropdown if hovered */}
                                    </Nav.Link>

                                    <Nav.Link
                                        onMouseEnter={() => setIsShopByAnimeHovered(true)}
                                        onMouseLeave={() => setIsShopByAnimeHovered(false)}
                                        style={{ position: 'relative', display: 'flex', alignItems: 'center' }} // Set position relative to parent link and align items to center
                                    >
                                        <p className="headerTitles1">SHOP BY ANIME</p>
                                        {isShopByAnimeHovered ? <FaAngleDown style={{ marginBottom: '20px' }} /> : <FaAngleDown style={{ marginBottom: '20px' }} />} {/* Render arrow based on hover */}
                                        {isShopByAnimeHovered && <DropdownBox onMouseEnter={() => setIsShopByAnimeHovered(true)} onMouseLeave={() => setIsShopByAnimeHovered(false)} />} {/* Render dropdown if hovered */}
                                    </Nav.Link>


                                    <Nav.Link onClick={()=>nav(`/ProductsDisplay/${category[3]}`)}><p className="headerTitles1">COMBO</p></Nav.Link>
                                    <Nav.Link onClick={()=>nav('/NewLaunch')}><p className="headerTitles1">NEW LAUNCH</p></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="headerRight1" >
                        <Navbar expand="lg" variant="dark"
                        >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" >
                                <Nav className="mr-auto" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "5px" }}
                                >
                                    <PopOverSearchButton  />
                                    <Nav.Link onClick={()=>nav('/Wishlist')}><IoMdHeartEmpty className="headerRightIcons1" /></Nav.Link>
                                    <Nav.Link onClick={()=>nav('/cart/:productId')}><IoCartOutline  className="headerRightIcons1" /></Nav.Link>
                                    <DropDown />
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>

                    </div>


                </div>
    </>
  )
}

export default Header
