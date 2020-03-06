import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends Component {
    
    constructor (props) {
        super(props)
        this.state = { editorHtml: '', theme: 'snow' }
        this.handleChange = this.handleChange.bind(this)
    }
      
    handleChange (html) {
        this.setState({ editorHtml: html });
        this.props.onTextChange(html);
    }
      
    render () {
        const modules = {
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline'],
                ]
            },
              clipboard: {
                matchVisual: false,
            },
            syntax: true
        }

        const formats =  [
            'bold', 'italic', 'underline'
        ]
        return (
            <div className="mt-3">
                <ReactQuill 
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={modules}
                    formats={formats}
                    placeholder="Text (Optional)"
                    ref={(el) => this.quillRef = el}
                />
            </div>
         )
    }
}

export default Editor;
