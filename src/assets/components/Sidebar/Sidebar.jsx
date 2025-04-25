import React from 'react';
import OffCanvas from '../Offcanvas/Offcanvas';
import CustomNavLink from '../Nav/Nav';

function Sidebar({
    openCanvas,
    handleCanvasOpenOrClose,
    menuOptions
}) {
    const handleNav = (item) => {
        return <>
            <div className="col-3 pb-1 text-center">
                {item.icon}
            </div>
            <div className="col text-start">
                <p className='mb-0'>{item.name}</p>
            </div>
        </>
    }
    const bodyContent = () => {
        return menuOptions.map((item, i) => (
            <React.Fragment key={i}>
                <CustomNavLink
                    className='w-100 btn-dark d-flex flex-wrap align-items-center mb-2 navlink-sidebar rounded p-2 text-decoration-none text-secondary'
                    title={handleNav(item)}
                    to={item.route}
                />
            </React.Fragment>
        ))
    }
    return (
        <>
            <div className="d-none d-xl-block bg-white sidebar p-4">

                <div className="sidebar-header">
                    <div className=" h-100 align-items-center justify-content-center">
                        <div className="col text-center">
                            <h1 className='p-4'>Prepy AI</h1>
                        </div>
                    </div>
                </div>
                <hr className='bg-secondary'/>
                {
                    bodyContent()
                }
            </div>


            <OffCanvas
                offCanvasShow={openCanvas}
                offcanvasPlacement="start"
                offcanvasClassname="rounded border-0"
                handleCanvasOpenOrClose={handleCanvasOpenOrClose}
                canvasHeader={<h1 className='p-3'>Prepy AI</h1>}
                canvasBody={bodyContent()}
            />
        </>
    );
}

export default Sidebar;
