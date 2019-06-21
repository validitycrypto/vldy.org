import React, { Component } from "react";

import { faSitemap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

class PageThree extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page3">
        <Page>
          <Grid layout="compact">
            <GridColumn>
              <div className="pageBody">
              <div className="h3">
                <FontAwesomeIcon icon={faSitemap} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;How does it work?
              </div>
              <div className="stageOne">
                <div className="stageNumber">1</div>
                <div className="stageText">
                  A poll is created for delegating a subject of 5 projects by demand and request, the winning entity is then confirmed for the validation process.
                </div>
              </div>
              <div className="stageTwo">
                <div className="stageNumber">2</div>
                <div className="stageText">
                  An intrinsic analysis and due-dillegence is executed upon the entities employee"s, product and ultimately it"s integrity.
                </div>
              </div>
              <div className="stageThree">
                <div className="stageNumber">3</div>
                <div className="stageText">
                  The investigation is then distributely proposed to validitors, in order to create a non-bias form of verification via communal validation.
                </div>
              </div>
              <div className="stageFour">
                <div className="stageNumber">4</div>
                <div className="stageText">
                 Validators engage in a interactive voting process using Validity"s unique UX, to express their outlook on the project via three options; positive, neutral or negative
                </div>
              </div>
              <div className="stageFive">
                <div className="stageNumber">5</div>
                <div className="stageText">
                  The concluding results are combined and are quantified out of a rating of 10, the distributed analysis then acts as a source of evaluation for future onlooking investors.
                </div>
              </div>
              </div>
            </GridColumn>
         </Grid>
        </Page>
      </div>
    )
  }
}

export default PageThree;