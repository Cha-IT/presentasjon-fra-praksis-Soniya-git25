import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  FlexBox,
  Image,
} from 'spectacle';

import mittBilde from './assets/bilder/Image (2).jpg';
import bilde2 from './assets/bilder/Image (3).jpg';
import bilde3 from './assets/bilder/Image 4.jpg';
import bilde4 from './assets/bilder/0000.jpg';
import bilde5 from './assets/bilder/111.jpg';
import bilde6 from './assets/bilder/222.jpg';
import bilde7 from './assets/bilder/333.jpg';
import bilde8 from './assets/bilder/444.jpg';
import bilde9 from './assets/bilder/555.png';
import bilde10 from './assets/bilder/666.jpg';
import bilde11 from './assets/bilder/777.jpg';
import bilde12 from './assets/bilder/888.jpg';
import bilde13 from './assets/bilder/999.jpg';
import bilde14 from './assets/bilder/1010.jpg';
import bilde15 from './assets/bilder/1212.jpg';
import bilde16 from './assets/bilder/1313.jpg';

const blackTheme = {
  colors: {
    primary: '#f3eeee',
    secondary: '#f3e8e8',
      tertiary: '#0c0606',
      quaternary: '#0c0606',

      text: '#ffffff',
        background: '#f1e9e9',



  },
};

function App() {
  return (
    <Deck theme={blackTheme}>
      {/* Slide 1: Tittel */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading>Utplassering hos Horten kommune</Heading>
          <Text>Laget med Spectacle og React</Text>
        </FlexBox>
      </Slide>

      {/* Slide 2: Om prosjektet */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading>Planlegging for to uker</Heading>
          <Text>
            Arbeidstid: 08:00–16:00
            <br />
            Arbeid på kontor og helpdesk
            <br />
            Fokus på IT‑support og systemadministrasjon
            <br />
            Mulighet for å lære om nettverk, sikkerhet og programvare
            <br />
            Fikk en ny PC med brukernavn og passord, tilgang til saksystem og Teams
            <br />
            Jobbet sammen med Trond.
          </Text>
        </FlexBox>
      </Slide>

      {/* Slide 3: Oppgave */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading>Oppgavene mine</Heading>
          <Text>
            Dro til sykehjem
            <br />
            Byttet en smart‑TV
            <br />
            Satt sammen PCer med andre lærlinger og lærte nye ting
            <br />
            Feilsøking
            <br />
            Tanking av PC‑ene og sjekkliste før levering
          </Text>
        </FlexBox>
      </Slide>

    

      {/* Slide 4: Bilder */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading>Jobbet med saksystem</Heading>
          <FlexBox>
            <Image src={bilde2} width="40%" />
            <Image src={bilde3} width="40%" />
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* Slide 5: Være ute sammen med en kollega */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading>Være ute sammen med en kollega</Heading>
          <FlexBox>
            <Image src={bilde4} width="18%" />
            <Image src={bilde5} width="18%" />
            <Image src={bilde6} width="18%" />
            <Image src={bilde7} width="18%" />
            <Image src={bilde8} width="18%" />
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* Slide 6: Har været i help desk */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading>Har vært i help desk</Heading>
          <FlexBox>
            <Image src={bilde9} width="40%" />
            <Image src={bilde10} width="40%" />
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* Slide 7: Andre oppgaver som jeg har gjørt */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading>Bilde av andre oppgaver som jeg har gjørt</Heading>
          <FlexBox>
            <Image src={bilde11} width="18%" />
            <Image src={bilde12} width="18%" />
            <Image src={bilde13} width="18%" />
            <Image src={bilde14} width="18%" />
            <Image src={bilde15} width="18%" />
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* Slide 8: Tanking av PCene */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading>Bilde av tanking av PC‑ene</Heading>
          <Image src={mittBilde} width="50%" />
          <Text>Her lastet vi inn operativsystem og nødvendig programvare.</Text>
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
