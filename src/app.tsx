/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = (): any => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors = [
  "#5c6bc0",
  "#f48fb1",
  "#81c784",
];

const Menu = (): any => (
	<div
		className="menu"
		style={{
			position: "fixed",
			top: 0,
			zIndex: 100
		}}
		>
			<h1>Emporium Registration</h1>
			<line/>
		</div>
);


export class Registration extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
			sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Step 1: Login with discord"
        },
        {
          text: "Step 2: Register with plug"
        },
        {
          text: "Step 3: Wait, that was it?"
        }
      ]
    };
  }


  render(): any {
    const { fullpages } = this.state as any;

    if (!fullpages.length) {
      return null;
    }

    
    return (
      <div className="Registration">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */
          // Required when using extensions
          pluginWrapper={pluginWrapper}
          // fullpage options
          licenseKey="YOUR_KEY_HERE" // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={["one", "two", "fin"]}
          sectionSelector={SECTION_SEL}
          // onLeave={this.onLeave.bind(this)}
          sectionsColor={(this.state as any).sectionsColor}
          render={() => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }: {text: any}) => (
                <div key={text} className={SEL}>
                  <h3>{text}</h3>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}
