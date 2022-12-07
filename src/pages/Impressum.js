import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import styled from "styled-components"




export default function Imressum(){
    return(
        <Layout>
            <Wrapper>
            <Container>
                <h1 style={{textAlign:"center", marginBottom:"30px"}}>Impressum</h1>
<h4>Angaben gemäß § 5 TMG</h4>
<p>Terra-Digital GmbH <br></br>
Lorsbacher Straße 56a<br></br>
65719 Hofheim<br></br><br></br>


Handelsregister: 113110 <br></br>
Registergericht: Frankfurt<br></br>

Vertreten durch die Geschäftsführer:<br></br>
<b>Wilhelm Dresselhaus</b>
</p>

<h4>Kontakt</h4>
<p>
Telefon: +49 (0) 6192 / 200 9411 <br></br>
E-Mail: info@terra-digital.de
</p>
<h4>Umsatzsteuer-ID</h4>
<p>
Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
<b>DE 320232756</b>
</p>
<h4>Streitschlichtung</h4>
<p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
Unsere E-Mail-Adresse finden Sie oben im Impressum.

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
</p>

<h4>HAFTUNG FÜR INHALTE</h4>
<p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
</p>
<h4>HAFTUNG FÜR LINKS</h4>
<p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.

Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
</p>
<h4>URHEBERRECHT</h4>
<p>
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
</p>
<p><b>Bildrechte:</b> Adobe Stock (ThomBal, RioPatuca Images, ktsdesign), Terra Digital, ReactIcons </p>
<p>Web-Developement: <a href="https://github.com/ThatOneJon">@thatOneJon</a></p>
            </Container>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.section`
p{
    font-size: 1.3em;
}
`