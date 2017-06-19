
let AnalyzeConstants = require('../../constants/AnalyzeConstants');
let JobAnalyze = require('./JobAnalyze').default;

class ProjectAnalyze extends React.Component {

    constructor(props) {
        super(props);
    }

    getJobs() {
        var self = this;
        let idArray = [];
        return this.props.project.get('jobs').map(function (job, i) {
            if (idArray.indexOf(job.get('id')) < 0 ) {
                let jobVolumeAnalysisChunk =self.props.volumeAnalysis.get(job.get('id').toString()).get('chunks');
                let jobVolumeAnalysisTotal =self.props.volumeAnalysis.get(job.get('id').toString()).get('totals');
                idArray.push(job.get('id'));
                return <JobAnalyze key={job.get('password')}
                                   chunks={jobVolumeAnalysisChunk}
                                   total={jobVolumeAnalysisTotal}
                                   project={self.props.project}
                                   job={job}
                                   idJob={job.get('id')}
                                   jobInfo={self.props.jobsInfo[job.get('id')]}/>
            }
        });
    }

    componentDidUpdate() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render() {
        return <div className="jobs sixteen wide column">
            {this.getJobs()}
        </div>;


    }
}

export default ProjectAnalyze;
