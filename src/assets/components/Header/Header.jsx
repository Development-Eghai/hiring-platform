import React from 'react';
import HeaderCard from '../Card/HeaderCard';
import Icons from '../../utils/Icons';
import CustomIcon from '../CustomIcon/Icons';
import CustomButton from '../Button/Button';
import Inpicon from '../Form/Inpicon';

const Header = ({
    offcanvasOnButton,
    currentRoute
}) => {

    const headerContentFunc = () => {
        return <>
            <div className="d-flex flex-wrap align-items-center justify-content-end p-0 ">

                <div className={`${currentRoute === '/classrooms/scheduletest' ? 'd-block col-10' : 'd-none col-10'}`}>
                    <h3 className='m-0 text-blue text-medium ms-3 ms-xl-5' >Schedule Test</h3>
                </div>

                <div className={`${currentRoute === '/classrooms' || currentRoute === '/classrooms/scheduletest' || currentRoute === '/classrooms/scheduletest/preview' ? 'd-none col-3 col-xl-1' : 'd-block col-3 col-xl-1'}`}>
                    <Inpicon
                        type='search' placeholder='search'
                        formControlClassName="py-2"
                        inputGroupTextClassName="bg-white"
                        icon={<CustomIcon icon={Icons.searchIcon} size={16} className='mb-2' />} />

                </div>

                <div className="col-7 col-sm-6 col-md-4  col-xl-2 d-flex justify-content-around">
                    <div className="border border-tertiary rounded-3 p-2  icon-box">
                        <CustomIcon icon={Icons.notificationIcon} size={24} />
                    </div>

                    <div className="border border-tertiary rounded-3 p-2 icon-box">
                        <CustomIcon icon={Icons.messageIcon} size={24} />
                    </div>

                    <div className="border border-tertiary rounded-3 p-2 icon-box">
                        <CustomIcon icon={Icons.userIcon} size={24} />
                    </div>

                    <div className="d-xl-none p-2">
                        <CustomButton className='create_classroom_btn' onClick={offcanvasOnButton} label="open" />
                    </div>
                </div>


            </div>
        </>
    }

    return (

        <HeaderCard
            cardClassName='w-100 border-0'
            cardTitleClassName="row justify-content-end mb-0"
            cardBody={headerContentFunc()}
        />

    )
}

export default Header