import Image from "next/image"
import Prayer from '../Assets/images/Prayer icon.png'
import Modal from 'react-modal';
import { useState } from 'react'
import Swal from 'sweetalert2'

function Listing({item, setOpenModal, setCurrentListing})
{
    
    return (
        <div onClick={() => {
            setCurrentListing(item)
            setOpenModal(true)
        }} className="listing">
            <div style={{marginLeft: '10px'}}>
                <Image alt={'item'} width={30} src={item.icon}/>
            </div>
            <span>{item.price}</span>
            <span style={{textAlign: 'center', marginRight: '50px'}}>{item.contender}</span>
            <span>{item.time_left}</span>

        </div>
    )
}

function PlayerListings({player, setOpenModal, setCurrentListing})
{
    return (
        <div className="player-listings-container">
            <div className="player-listings-header">
                <span>{player.name}</span>

                <div className="columns-labels">
                    <span>Item</span>
                    <span>Bid</span>
                    <span>Contender</span>
                    <span>Time Left</span>
                </div>
            </div>
            
            <div className="player-listings">
                {player.listings.map((listing, key) => 
                    <Listing 
                        key={key} 
                        item={listing} 
                        setOpenModal={setOpenModal} 
                        setCurrentListing={setCurrentListing}
                    />
                )}
            </div>
        </div>
    )
}

export default function Auctions()
{
    const [openModal, setOpenModal] = useState(false)
    const [currentListing, setCurrentListing] = useState({
        icon: Prayer,
        price: '',
        contender: '',
        time_left: ''
    })
    const [bid, setBid] = useState(0)

    const players = [
        {
            name: "xMyke B",
            listings: [
                {
                    icon: Prayer,
                    price: "100k",
                    contender: "raw glizzies",
                    time_left: "1hr"
                },
                {
                    icon: Prayer,
                    price: "100k",
                    contender: "raw glizzies",
                    time_left: "1hr"
                },
                {
                    icon: Prayer,
                    price: "100k",
                    contender: "raw glizzies",
                    time_left: "1hr"
                },
                {
                    icon: Prayer,
                    price: "100k",
                    contender: "raw glizzies",
                    time_left: "1hr"
                },
                {
                    icon: Prayer,
                    price: "100k",
                    contender: "raw glizzies",
                    time_left: "1hr"
                },
                {
                    icon: Prayer,
                    price: "100k",
                    contender: "raw glizzies",
                    time_left: "1hr"
                },
                {
                    icon: Prayer,
                    price: "100k",
                    contender: "raw glizzies",
                    time_left: "1hr"
                },
                {
                    icon: Prayer,
                    price: "100k",
                    contender: "raw glizzies",
                    time_left: "1hr"
                },

            ]
        },
        {
            name: "raw glizzies",
            listings: [
                {
                    icon: Prayer,
                    price: "500k",
                    contender: "GIM Emoney",
                    time_left: "3hr"
                }
            ]
        },
        {
            name: "GIM Emoney",
            listings: [
                {
                    icon: Prayer,
                    price: "50k",
                    contender: "Glizzieloaf",
                    time_left: "30min"
                }
            ]
        },
        {
            name: "Glizzieloaf",
            listings: [
                {
                    icon: Prayer,
                    price: "150k",
                    contender: "xMyke B",
                    time_left: "5hr"
                }
            ]
        }
    ]

    function handleBidChange(e)
    {
        setBid(e.target.value)
    }

    function submitBid()
    {
        if (bid != 0)
        {
            Swal.fire({
                title: `Are you sure you want to bid ${bid}?`,
                // text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Success!",
                    text: "Your bid has been placed.",
                    icon: "success"
                  });
                  setOpenModal(false)
                  setBid(0)
                }
              });
        }
    }

    return (
        <div id="Auctions">

            <div className="create-bid-container">
                <span className="create-bid-title">Create Bid</span>

                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}>
                        <span className="create-bid-label">Item</span>
                        <input className="create-bid-input" style={{textAlign: 'center'}} type="text"/>
                        <button className="item-search">Search</button>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column',  textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}>
                        <span className="create-bid-label">Price</span>
                        <input className="create-bid-input" style={{textAlign: 'center'}} type="number"/>
                    </div>
                </div>

                <button>Create</button>
            </div>
            
            <div className="auctions-map">
                {players.map((player, key) => 
                    <PlayerListings
                        key={key}
                        player={player} 
                        setOpenModal={setOpenModal} 
                        setCurrentListing={setCurrentListing}
                    />
                )}
            </div>

            <Modal
                isOpen={openModal}
                ariaHideApp={false}
                overlayClassName="modal-background"
                className="modal"
            >
                <div className="listing-details">
                    <Image alt={'item'} width={80} src={currentListing.icon}/>
                    <div className="listing-detail-container">
                        <span className="listing-details-label">Price</span>
                        <span className="listing-detail">{currentListing.price}</span>
                    </div>

                    <div className="listing-detail-container">
                        <span className="listing-details-label">Contender</span>
                        <span className="listing-detail">{currentListing.contender}</span>
                    </div>

                    <div className="listing-detail-container">
                        <span className="listing-details-label">Time Left</span>
                        <span className="listing-detail">{currentListing.time_left}</span>
                    </div>
                </div>

                <div className="bid-container">
                    <input placeholder={0} onChange={(e) => handleBidChange(e)} className="bid-input" type="number"/>
                    <button onClick={submitBid}>Submit Bid</button>
                </div>

                <span className="modal-close" onClick={() => {
                    setOpenModal(false)
                    setBid(0)
                    }}>X</span>
            </Modal>
        </div>
    )
}