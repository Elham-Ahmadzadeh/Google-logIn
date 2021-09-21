import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native";
import axios from "axios";
import { CALENDERID, GOOGLECALENDERAPIKEY } from "@env";

import moment from "moment";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function Schedule() {
  const [events, setEvents] = useState([]);
  const calenderId = CALENDERID;
  let googleCalendarApiKey = GOOGLECALENDERAPIKEY;

  let fiveDays = 2592000000;
  let now = Date.now();
  let timeMax = new Date(now + fiveDays).toISOString();
  let timeMin = new Date(now - fiveDays).toISOString();

  useEffect(() => {
    fetchCalendar();
  }, []);

  const url = `https://www.googleapis.com/calendar/v3/calendars/${calenderId}/events?key=${googleCalendarApiKey}&timeMin=${timeMin}&timeMax=${timeMax}&maxResults=30&orderBy=startTime&singleEvents=${true}`;
  const fetchCalendar = async () => {
    try {
      const response = await axios.get(url);
      setEvents(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  const renderItem = (item) => {
    return (
      <View key={item.uuid}>
        <Text>{item.dateTime}</Text>
        <Text>{item.summary}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 0.2 }}>     
      <Calendar
        minDate={"2019-05-10"}   
        style={{
          borderWidth: 1,
          borderColor: "gray",
          height: 350,
        }}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "blue",
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      {/*      {console.log(item.summary)}
        {console.log(item.start.dateTime)} */}
        <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        maxToRenderPerBatch={1}
        removeClippedSubviews={true}
        legacyImplementation={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </SafeAreaView>
  );
}
