import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt="Pedro Mapelli" />
            <div>
              <span>Bem vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 26</span>
            <span>Terça-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/15129047?s=460&u=00c277245c45ec6196cf35be058662ae3b94e7fb&v=4"
                alt="Pedro Mapelli"
              />

              <strong>Pedro Mapelli</strong>
              <span>
                <FiClock />
                8:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/15129047?s=460&u=00c277245c45ec6196cf35be058662ae3b94e7fb&v=4"
                  alt="Pedro Mapelli"
                />
                <strong>Pedro Mapelli</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/15129047?s=460&u=00c277245c45ec6196cf35be058662ae3b94e7fb&v=4"
                  alt="Pedro Mapelli"
                />
                <strong>Pedro Mapelli</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                13:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/15129047?s=460&u=00c277245c45ec6196cf35be058662ae3b94e7fb&v=4"
                  alt="Pedro Mapelli"
                />
                <strong>Pedro Mapelli</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
