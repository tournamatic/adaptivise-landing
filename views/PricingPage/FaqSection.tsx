import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Why Adaptivise?">
        Adaptivise is a one-stop-shop for advice focused financial planners 
        to scale their business and collaborate with their clients with 
        the highest level of transparency.
      </Accordion>
      <Accordion title="Who needs Adaptivise?">
        Advice focused financial planners who want to be the best at 
        their profession and deliver financial wisdom to their clients.
      </Accordion>
      <Accordion title="How do I sign up?">
        It's really easy. Click sign up and follow the steps.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
