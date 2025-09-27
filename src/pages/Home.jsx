import { Button, Container, Group } from "@mantine/core";
import { Link } from "react-router";

function Home(){

    return(
        <>
            <Container>

                <Group>
                    <Link to="/users">
                        <Button>Usuarios</Button>
                    </Link>
                    <Link to="/companies">
                        <Button>Empresas</Button>
                    </Link>
                </Group>

            </Container>
        </>
    )
}

export default Home;