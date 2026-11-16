import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react'
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from 'axios'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"




const HotCollections = () => {


  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {breakpoint: 768,
        settings: {slideToShow: 2}
      },
      {breakpoint: 480,
        settings: {slidesToShow: 1}
      }
    ]
  }

  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(true)


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
        console.log(response.data)
        setItems(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)

    }
    fetchItems()

    
  }, [])  

  return (
    
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          
          {loading
            ?  ( new Array(4).fill(0).map((_, index) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
            <div className="nft_coll">
              <div className="nft_wrap skeleton">
                <Link to="/item-details">
                  <img src="" className="lazy img-fluid" alt="" /> 
                </Link>
              </div>
              <div className="nft_coll_pp">
                <Link to="/author">
                  <img className="lazy pp-coll skeleton" id="sixty" src="" alt=""/>
                </Link>
                 {/* <i className="fa fa-check"></i>  */}
              </div>
              <div className="nft_coll_info">
                <Link to="/explore">
                  <div className="skeleton skeleton-text-1"></div>
                </Link>
                <div className="skeleton skeleton-text-2"></div>
              </div>
            </div>
          </div>   
            )))

          : (
          
          <Slider {...settings}>
          {items.map((item) => (
              <div className="" key={item.id}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/item-details">
                      <img src={item.nftImage} className="lazy img-fluid" alt="" />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/author">
                      <img className="lazy pp-coll" src={item.authorImage} alt="" />
                    </Link>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/explore">
                      <h4>{item.title}</h4>
                    </Link>
                    <span>{item.code}</span>
                  </div>
                </div>
              </div>
              ))} 
              </Slider> 
            )}
            {/*<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={AuthorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>Pink Ocean</h4>
                  </Link>
                  <span>ERC-192</span>
                </div>
              </div>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={AuthorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>Pink Ocean</h4>
                  </Link>
                  <span>ERC-192</span>
                </div>
              </div>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={AuthorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>Pink Ocean</h4>
                  </Link>
                  <span>ERC-192</span>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
