/** localeCalender não utlizados */
import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Container, ButtonFilterText, ModalContent, ButtonFilter } from "./styles";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales['pt-br'] = {
    monthNames: ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outobro', 'Novembro', 'Dezembre'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai', 'Jun', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }) {
    const [dateNow, setDateNow] = useState(new Date());
    const [markeddates, setMarkedDates] = useState({});

    function handleOnDayPress(date) {
        //console.log(date.dateString)
        setDateNow(new Date(date.dateString));

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3bdf',
            textColor: '#FFF'
        }

        setMarkedDates(markedDay);

    }

    function handleFilterDate() {
        handleFilter(dateNow);
        setVisible();
    }

    return (
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }}>

                </View>
            </TouchableWithoutFeedback>

            <ModalContent>
                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markeddates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#FF0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#FFF'
                    }}
                />
                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>
                        Filtrar
                    </ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}