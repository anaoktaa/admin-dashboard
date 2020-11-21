import React from 'react';

import { CustomCard, CustomCardBody, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';

const ColorStatesContainer = () => {

    const CardColorStates = ({  }) => (
        <div>
            <CustomCard outlined='primary' className='mb-30'>
                <CustomCardTitleText>PRIMARY CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
            <CustomCard outlined='secondary' className='mb-30'>
                <CustomCardTitleText>SECONDARY CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
            <CustomCard outlined='success' className='mb-30'>
                <CustomCardTitleText>SUCCESS CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
            <CustomCard outlined='info' className='mb-30'>
                <CustomCardTitleText>INFO CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
            <CustomCard outlined='warning' className='mb-30'>
                <CustomCardTitleText>WARNING CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
            <CustomCard outlined='alt' className='mb-30'>
                <CustomCardTitleText>ALTERNATE CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
            <CustomCard outlined='light' className='mb-30'>
                <CustomCardTitleText>LIGHT CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
            <CustomCard outlined='dark' className='mb-30'>
                <CustomCardTitleText>DARK CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
            <CustomCard outlined='danger' className='mb-30'>
                <CustomCardTitleText>DANGER CARD SHADOW</CustomCardTitleText>
                <CustomCardBody>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </CustomCardBody>
            </CustomCard>
        </div>
    );

    return (
        <div className='grid-3-gap-30'>
            <CardColorStates/>
            <CardColorStates/>
            <div>
                <CustomCard contained='primary' className='mb-30'>
                    <CustomCardTitleText>PRIMARY CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='secondary' className='mb-30'>
                    <CustomCardTitleText>SECONDARY CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='success' className='mb-30'>
                    <CustomCardTitleText>SUCCESS CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='info' className='mb-30'>
                    <CustomCardTitleText>INFO CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='warning' className='mb-30'>
                    <CustomCardTitleText>WARNING CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='alt' className='mb-30'>
                    <CustomCardTitleText>ALTERNATE CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='light' className='mb-30'>
                    <CustomCardTitleText>LIGHT CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='dark' className='mb-30'>
                    <CustomCardTitleText>DARK CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='danger' className='mb-30'>
                    <CustomCardTitleText>DANGER CARD SHADOW</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </CustomCardBody>
                </CustomCard>
            </div>
        </div>
    )
};

export default ColorStatesContainer;