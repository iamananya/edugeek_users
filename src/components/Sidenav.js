import React from "react";
import Adminpage from "./Adminpage";
import Timetable from "./Timetable";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { BrowserRouter ,Route} from "react-router-dom";

function Sidenav() {
  return (
    <div>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
          // history.push(itemId);
        }}
        items={[
        
          {
            title: "Overview",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Attendance",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Assignment",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Test",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Announcement",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Video",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Live Class",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Study Material",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Settings",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          
          {
            title: "Students",
            itemId: "/management",
            // elemBefore: () => <Icon name="users" />,
            subNav: [
              {
                title: "Video",
                itemId: "/management/projects",
              },
              {
                title: "Settings",
                itemId: "/management/members",
              },
            ],
          },
          {
            title: "Setting",
            itemId: "/another",
            subNav: [
              {
                title: "Teams",
                itemId: "/management/teams",
              },
            ],
          },
          {
            title: "Video",
            itemId: "/another",
            subNav: [
              {
                title: "Teams",
                itemId: "/management/teams",
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Sidenav;
