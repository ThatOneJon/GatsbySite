import React, { useState } from "react"
import Layout from "../components/Layout"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import {Link} from "gatsby"
import Row from "react-bootstrap/Row"

export default function About(){
    const [open1, setOpen1] = useState(true);
    const [open, setOpen] = useState(false);
    return(
        <Layout>
            <h1 style={{textAlign:"center", textDecoration:"underline"}}>About this site!</h1>
            <Button
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text"
        aria-expanded={open1}
        className="mt-5"
      >
        General Infos
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open1} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '70%' }}>
                Aute Lorem aute consectetur ut pariatur sit laborum in nisi ea occaecat ut eu. Et eiusmod esse aute et proident do commodo tempor enim occaecat eu. Laborum qui Lorem ea nostrud consequat mollit aute et occaecat velit voluptate. Anim ipsum consequat est magna cillum officia pariatur irure elit.
                Dolore aliquip nisi eu proident eiusmod exercitation ex excepteur sunt. Deserunt ea officia amet magna laborum. Ad ipsum nostrud reprehenderit dolore adipisicing mollit laborum. Veniam fugiat nulla pariatur adipisicing commodo non consequat non esse proident consectetur.
            </Card>
          </div>
        </Collapse>
      </div>

      <Button
        className="mt-5"
        onClick={() => setOpen(!open) }
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Legal Infos !
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
            <h2>§ § §</h2>
        <Card body style={{ width: '70%' }}>
            Amet eu minim commodo laborum laborum proident ipsum incididunt duis magna ullamco. Proident velit aute ipsum ipsum culpa eu sit exercitation. Esse elit non cupidatat aliqua reprehenderit reprehenderit tempor nostrud do dolor ea. Et commodo mollit culpa deserunt. Cupidatat aliqua cupidatat in consequat qui laboris ullamco ut est aute eu adipisicing irure tempor. Elit quis irure ex amet. Fugiat id exercitation eu ullamco cupidatat mollit.

Est non officia adipisicing cupidatat laboris nulla deserunt. Sit cupidatat tempor incididunt nostrud laborum laborum velit enim. Eu enim labore eu veniam aliqua anim in dolor aute magna magna duis ad labore. Ex aliquip quis occaecat eu ut aute qui elit. Amet id id sint irure qui Lorem eu esse.

Velit minim consectetur ad et id sunt commodo veniam pariatur et fugiat labore anim proident. Labore pariatur quis voluptate Lorem aute sit. Anim consequat amet fugiat deserunt officia. Ex et deserunt officia mollit aliqua incididunt duis quis. Duis consectetur in reprehenderit velit et et dolor sunt tempor officia anim. Est qui labore labore excepteur pariatur do id.

Deserunt excepteur veniam anim et ad velit. In consectetur amet fugiat labore ea. Duis quis irure est adipisicing minim consectetur excepteur deserunt nisi eu qui fugiat tempor. Ut cupidatat ex non non. Nulla officia labore id commodo laboris laboris veniam enim quis nisi Lorem irure minim laborum. Dolore ut nisi quis reprehenderit irure ipsum adipisicing pariatur velit amet eiusmod quis. Do officia duis in ullamco officia exercitation eu labore amet do exercitation dolor pariatur.

Velit laboris sit in ut qui non excepteur exercitation duis incididunt sint consequat. Adipisicing aliqua amet quis ea nulla proident. Reprehenderit esse laboris esse tempor tempor in nostrud occaecat culpa Lorem. Proident ad dolore est labore do nisi. Officia nisi quis ut pariatur. Ullamco ipsum ullamco ad consequat dolor dolore. Minim officia fugiat fugiat proident id sunt officia do deserunt Lorem irure officia.

Dolore minim nostrud eiusmod eu voluptate quis ullamco. Labore officia commodo anim officia dolor sint non dolore amet do tempor qui eu. Ex aute qui anim eu aliqua. Incididunt elit reprehenderit aliquip duis magna elit do labore. Mollit veniam eu reprehenderit consectetur fugiat fugiat velit non. Ullamco aliqua anim irure laboris quis ex qui eu ipsum. Nisi pariatur ex nulla eu ullamco ad nulla exercitation mollit enim dolore magna.

Et laborum aliqua anim voluptate aute exercitation esse consequat. Excepteur sunt amet commodo qui officia ipsum exercitation cillum aliquip irure ullamco. Officia occaecat veniam fugiat magna dolore culpa minim pariatur anim. Deserunt id velit reprehenderit esse sit labore tempor cillum cupidatat id do ipsum consequat. Ex minim aute laborum mollit do nulla irure.
          </Card>
        </div>
      </Collapse>

        <h3 style={{ marginTop: '60px',marginBottom:"40px", textAlign:"center", textDecoration:"underline" }}>Any open Questions?</h3>
        <Row>
        <Button className="btn-lg p-3" as={Link} to="/contact" style={{fontSize:"2em"}}> Contact us !</Button>
        </Row>
        </Layout>
    )
}