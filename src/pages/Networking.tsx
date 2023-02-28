import React from 'react';
import "./Pages.css"

const Networking = () => {
    return (
        <div>
            <h1 className='title'>Networking and Operating System Projects</h1>
            <h3 className='body'>This page details both my projects installing and using linux operating systems as well as cloud engineering projects I've worked on</h3>
            <div className='container'>
            
            <br />
            <div className='body'>
            I have done several Archlinux installation projects and have documented my experiences with bare linux installations. These projects have helped me gain 
            knowledge of file systems, booting, as well as greatly helped ability to use Linux, both as a desktop environment and using virtual machines.
            <br />
            <br />
            The first computer that I installed an Archlinux partition on was a Jumper EZBook X1. This computer is a low quality netbook, and the only available ports for 
            charging, video and audio, internet, and USB was a single USB-C port. This severly limited my options for a Linux installation, as I almost immediately
            discovered that the most recent Archlinux ISO (At the time) did not discover my wifi card, and internet is required to download the operating system from the 
            bootable image.
            </div>
            <div>
                <img src='jumperX1.png' width="500" height="300" className='inline'/>
            </div>
        </div>
    </div>
    );
}
export default Networking;