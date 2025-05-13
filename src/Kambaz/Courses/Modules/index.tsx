export default function Modules() {
    return (
      <div>
        <div>
          <button id="wd-collapse-all">Collapse All</button>
          <button id="wd-view-progress">View Progress</button>
          <select id="wd-publish">
                    <option value="Publish All">Publish All</option>
                    <option value="Public Current">Publish Current</option>
                </select>
          <button id="wd-add-module">+ Module</button>
        </div>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn CSS and Bootstrap</li>
                  <li className="wd-content-item">Learn how to style web pages</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 3</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 4</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to CSS</li>
                  <li className="wd-content-item">Styling color and background color</li>
                  <li className="wd-content-item">Styling dimensions and positions</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn JavaScript</li>
                  <li className="wd-content-item">Learn how to create SPAs with React</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 5</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 6</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Intro to JS</li>
                  <li className="wd-content-item">Dynamic Styling</li>
                  <li className="wd-content-item">Parameterizing Components</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  