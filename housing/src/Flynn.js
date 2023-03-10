import React from 'react';
import './App.css';
import Papa from 'papaparse';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import californiaCounties from './California_County_Boundaries.geojson';
import data from './counties - Sheet1.csv';


const CaliforniaMap = () => {
  const [parsedData, setData] = React.useState([]);
  React.useEffect(() => {
    Papa.parse(data, {
      download: true,
      header: true,
      complete: function(results) {
        setData(results.data);
      }
    });
  }, []);
  const [hoverName, setTooltipContent] = React.useState('No county hovered');
  const [clickedName, setClickedName] = React.useState('No county clicked yet');
  const [zero, setZero]= React.useState('');
  const [one, setOne]= React.useState('');
  const [two, setTwo]= React.useState('');
  const [three, setThree]= React.useState('');
  const [four, SetFour]= React.useState('');
  const [avg, setAvg]= React.useState('');
  const [divStyle, setDivStyle]= React.useState('hidden');
  const handleCountyHover = (CountyName) => {
    console.log(CountyName);
    setTooltipContent(CountyName);
  };
  const handleMouseDown = (CountyName) => {
    //call function to display the county rent info
    const rentPrice = parsedData.find(county => county.County === (CountyName+" County"));
    setZero(rentPrice.ZEROBR);
    setOne(rentPrice.ONEBR);
    setTwo(rentPrice.TWOBR);
    setThree(rentPrice.THREEBR);
    SetFour(rentPrice.FOURBR);
    setAvg(rentPrice.AVG);
    setDivStyle('visible');
    console.log(divStyle);
    setClickedName(CountyName);
  };
  const handleCountyLeave = () => {
    setTooltipContent('No county hovered');
  };
  const isHovered = (name) => {
    if(name===clickedName){
      return 'blue';
    }
    if(name===hoverName){
      return 'red';
    }
    return 'pink';
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginLeft:"60px", width:'30%' }}>
        The county you are hovering is: {hoverName} <br></br>
        You just clicked: {clickedName}
        <br></br>
        <div style={{visibility: divStyle}}>
        The rent data for {clickedName} County is as follows: <br></br>
        Average Rent Cost : ${avg} USD <br></br>
        Zero Bedrooms: ${zero} USD <br></br>
        One Bedroom: ${one} USD <br></br>
        Two Bedrooms: ${two} USD <br></br>
        Three Bedrooms: ${three} USD <br></br>
        Four Bedrooms: ${four} USD <br></br>
        </div>
      </div>
      <div style={{ position: "relative", width: "50%", height: "50%" }}>
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ center: [0, 40], scale: 2300 }}
          width={500}
          height={500}
          style={{ display: "block" }}
        >
          <Geographies
            geography={californiaCounties}
            style={{ transform: "translate(700px, 10px)" }}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleCountyHover(geo.properties.CountyName)}
                  onMouseLeave={handleCountyLeave}
                  onMouseDown={() => handleMouseDown(geo.properties.CountyName)}
                  fill={isHovered(geo.properties.CountyName)}
                  stroke="#FFF"
                  strokeWidth={0.5}
                  style={{
                    default: {
                        outline: 'none'
                    },
                    hover: {
                        outline: 'none'
                    },
                    pressed: {
                        outline: 'none'
                    }
                }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      
      
    </div>
  );
};


function test1() {
    return (
      <div>
        <header className="App-header">
          <p>
            Flynn testing here
          </p>
          
        </header>
        <div ><CaliforniaMap/></div>
      </div>
    );
  }
  
  export default test1;
