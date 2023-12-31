import { DigiTypography } from '@digi/arbetsformedlingen-react';
import '../styles/HomePage.scss';
import { TypographyVariation } from '@digi/arbetsformedlingen';

export const HomePage = () => {
  return (
    <DigiTypography
    afVariation={TypographyVariation.SMALL}
>
    <div className="homePage">
      <h1> Välkommen till Alltitsu</h1>
      <p className="punchLine">Utnyttja kraften i historisk jobbdata!</p>
      <p>
        Letar du efter en konkurrensfördel i din jobbsökning eller arbetskraftsplanering? Alltitsu
        är här för att hjälpa dig dra nytta av den omfattande historiska jobbsökningsdatan, vilket
        ger dig värdefulla insikter och verktyg för att fatta informerade beslut.
      </p>
      <h2>Varför Alltitsu?</h2>
      <p>
        På Alltitsu förstår vi vikten av datadrivna beslut i dagens konkurrensutsatta arbetsmarknad.
        Vår plattform ger dig möjlighet att:
      </p>
      <ul>
        <li>
          <span>Utforska Historiska Trender: </span>
          Dyk djupt in i arbetsmarknadens förflutna för att förstå hur den har utvecklats över tid.
        </li>
        <li>
          <span>Analysera Branschförändringar: </span>
          Identifiera nya branscher och trender för att fatta informerade karriärval.
        </li>
        <li>
          <span>Optimera Jobbsökningar: </span>
          Förbättra din strategi för jobbsökning baserat på datadrivna insikter.
        </li>
        <li>
          <span>Förbättra Arbetskraftsplanering: </span>
          Hjälp företag att fatta beslut baserade på data när det gäller talanganskaffning och
          resursfördelning.
        </li>
      </ul>
      <h2> Hur fungerar Alltitsu?</h2>
      <p>
        {' '}
        Här kan du söka på arbetsgivare och datum för att hämta historisk jobbdata. Välj mellan vilka datum du vill söka och vilken arbetsgivare så får du fram resultaten och kan klicka dig in på enskilda annonser.
      </p>
      <h3> Om Alltitsu</h3>
      <p className="about">
        Med en passion för data och en
        förpliktelse till användarcentrerad design har vi skapat en plattform som ger individer och
        organisationer möjlighet att fatta bättre datadrivna beslut.
      </p>
    </div>
    </DigiTypography>
  );
};
