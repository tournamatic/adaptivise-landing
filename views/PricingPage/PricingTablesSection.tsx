import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for financial planners</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="free"
          description="Give us a try for free"
          benefits={['1 seat', '1 active project', 'Ulimited viewers', '10 documents']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Professional"
          description="Best for individual planners"
          benefits={['1 seat', '3 active project', 'Ulimited viewers', '100 files']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Enterprise"
          description="Get your team together"
          benefits={[
            '10 seat',
            '100 active projects',
            'Ulimited viewers',
            'Unlimited files',
            'Customization',
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
