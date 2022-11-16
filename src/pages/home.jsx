import { NameTag, Container, Text } from "../components/nameTag";

const Home = () => {
    return(
        <Container FontWeight='300' Bg='#D9CEBF' Height='100vh' Width='100vw' Jc='center' Ai='center' column Gap='5%'>
            <Text Size='45px' Weight='600'>❣️ST Family❣️</Text>
            <Container column Gap='20px'>
                <NameTag><Text Size='24px' Weight='400'>🐻‍❄️‍‍Keminaa🐻‍❄️</Text></NameTag>
                <NameTag><Text Size='24px' Weight='400'>🫂Dukuu🫂</Text></NameTag>
                <NameTag><Text Size='24px' Weight='400'>🦋Oyuuu🦋</Text></NameTag>
                <NameTag><Text Size='24px' Weight='400'>🪩Erkaa🪩</Text></NameTag>
                <NameTag><Text Size='24px' Weight='400'>🔮Munhjiin🔮</Text></NameTag>
                <NameTag><Text Size='24px' Weight='400'>🙆‍♀️Egshii🙆‍♀️</Text></NameTag>
                <NameTag><Text Size='24px' Weight='400'>👄Nenee👄</Text></NameTag>
                <NameTag><Text Size='24px' Weight='400'>🫶🏻Gvnee🫶🏻</Text></NameTag>
                <NameTag><Text Size='24px' Weight='400'>🫠Enhochirr🫠</Text></NameTag>
            </Container>
        </Container>
    )
}

export default Home;