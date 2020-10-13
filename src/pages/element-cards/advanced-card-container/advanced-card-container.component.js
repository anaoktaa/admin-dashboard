import React from 'react';

import { CustomCard, CustomCardHeader, CustomCardBody, CustomCardTitleText, CustomCardFooter } from  '../../../components/custom-card/custom-card.styles';
import CustomButton from '../../../components/custom-button/custom-button.component';

const AdvancedCardContainer = () => {
    return (
        <div className='grid-2-gap-30'>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardHeader>Header</CustomCardHeader>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                            fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </CustomCardBody>
                    <CustomCardFooter>
                        <CustomButton variant='solid' color='success'> 
                            Save
                        </CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard contained='primary' className='mb-30'>
                    <CustomCardHeader>Header</CustomCardHeader>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                            fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </CustomCardBody>
                    <CustomCardFooter>
                        <CustomButton variant='solid' color='danger'> 
                            Save
                        </CustomButton>
                    </CustomCardFooter>
                </CustomCard>
            </div>
            <div>
                <CustomCard hover className='mb-30'>
                    <CustomCardHeader>Shadow Hover Card</CustomCardHeader>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                            fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </CustomCardBody>
                    <CustomCardFooter>
                        <CustomButton variant='solid' color='primary'> 
                            Submit
                        </CustomButton>
                    </CustomCardFooter>
                </CustomCard>
            </div>
        </div>
    )
}

export default AdvancedCardContainer;