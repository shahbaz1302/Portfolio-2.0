import CardSwap, { Card } from "../Layout/CardSwap";
import ScrollFloat from "../Layout/ScrollFloat";

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="edu-content">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                >
                    EDUCATION
                </ScrollFloat>
                <p className="edu-para para1">My education has been a journey of learning and development. Here are the details of my academic background.</p>
                <p className="edu-para para2">This section presents my academic background and educational journey. It highlights the foundational learning and structured coursework that shape my technical understanding. Through dedicated study and university resources, I continue building essential knowledge for professional growth. Education forms the core of my development as a developer.</p>
            </div>
            <div style={{ height: '500px', position: 'relative' }}>
                <CardSwap
                    skewAmount={5}
                    easing="elastic"
                    pauseOnHover={true}
                >
                    <Card>
                        <div className="card-content">
                            <img src="./bbd-logo.png" alt="" />
                            <p>Pursuing my Bachelor's degree (B.Tech) in Computer Science from BBd University, Lucknow. During my time at BBD, I gained a strong foundation in programming, software development, and computer science principles.</p>
                            <p><strong>2022-2026 - B.tech ( Computer Science & Engineering ) </strong></p>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-content">
                            <img src="./bhps-logo.png" alt="" />
                            <p>I completed my class 12 education from Ben Hur Public School, Pilibhit, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.</p>
                            <p><strong>2021 - Intermediate ( CBSE ) </strong></p>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-content">
                            <img src="./bhps-logo.png" alt="" />
                            <p>I completed my class 10 education from Ben Hur Public School, Pilibhit, under the CBSE board, where I studied Science with Computer.</p>
                            <p><strong>2019 - High School ( CBSE ) </strong></p>
                        </div>
                    </Card>
                </CardSwap>
            </div>
        </section>
    )
}

export default Education