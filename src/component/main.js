import './css/main.css';

function main() {

    return(
        <>
            <div className="main1">
                <div style={{marginTop:"60px"}}>
                    <div className="main1_title"> HELLO COLLEGE STUDENT COMMUNITY </div>
                    <div className="main1_sub_title"> 우리 학교 정보도 공유하며 다른 학생들과 자유롭게 대화를 즐겨보세요! </div>
                </div>
                <img className="main1_img" src="main_img/main.png"/>
            </div>
            <div className="main2">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
        </>
    );
}

export default main;