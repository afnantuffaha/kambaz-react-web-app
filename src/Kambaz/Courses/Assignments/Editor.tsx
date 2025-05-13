export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
        </textarea><br /><br />
        
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="Assignments">Assignments</option>
                    <option value="Quizzes">Quizzes</option>
                    <option value="Exams">Exams</option>
                    <option value="Projects">Projects</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="Percentage">Percentage</option>
                    <option value="Points">Points</option>
                    <option value="Letter Grade">Letter Grade</option>
                    <option value="Complete/Incomplete">Complete/Incomplete</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="Online">Online</option>
                    <option value="On Paper">On Paper</option>
                    <option value="No Submission">No Submission</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-online-entry-options">Online Entry Options</label>
            </td>
            <td>
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label><br />
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label><br />
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label><br />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
                <input id="wd-due-date" type="date" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" />
            </td>
          </tr>
          <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-buttons"></label>
            </td>
          <button id="wd-cancel-button">Cancel</button>
          <button id="wd-save-button" style={{ marginLeft: "10px" }}>Save</button>
        </tr>
        </table>
      </div>
  );
}