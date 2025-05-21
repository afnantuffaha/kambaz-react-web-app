export default function Zindex() {
    return (
        <div id="wd-z-index">
  <h2>Z index</h2>
  <div className="wd-pos-relative">
    <div className="wd-pos-absolute-10-10 
         wd-bg-color-yellow wd-dimension-portrait">
      Portrait
    </div>
    <div className="wd-zindex-bring-to-front 
         wd-pos-absolute-50-50 wd-dimension-landscape
         wd-bg-color-blue wd-fg-color-white">
      Landscape
    </div>
    <div className="wd-pos-absolute-120-20 
         wd-bg-color-red wd-dimension-square">
      Square
    </div>
  </div><br /><br /><br /><br /><br /><br /><br />
  <div id="wd-float-divs">
 <h2>Float</h2>
 <div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
     Yellow </div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
     Blue </div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
     Red </div>
   <img className="wd-float-right"
     src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
   <div className="wd-float-done"></div>
 </div>
</div>
</div>
    );
}