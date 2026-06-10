import React, { Component } from 'react';

export default class BookingWidget extends Component {
  componentDidMount() {
    const config = {
      widget_type: 'iframe',
      container_id: 'simplybook-widget',
      url: 'https://drpetermckavanagh.simplybook.it',
      theme: 'default',
      theme_settings: {
        sb_base_color: '#8EC8EE',
        body_bg_color: '#ffffff',
        dark_font_color: '#333333',
        light_font_color: '#ffffff',
        sb_busy: '#cccccc',
        sb_available: '#e6f7ff',
        booking_nav_bg_color: '#8EC8EE',
        timeline_hide_unavailable: '1',
        hide_past_days: '0',
        timeline_show_end_time: '0',
        timeline_modern_display: 'as_slots',
        display_item_mode: 'block',
        sb_review_image: '',
        hide_img_mode: '0',
        show_sidebar: '1'
      },
      timeline: 'modern',
      datepicker: 'top_calendar',
      is_rtl: false,
      app_config: { clear_session: 0, predefined: [], allow_switch_to_ada: 0 }
    };

    const script1 = document.createElement('script');
    script1.src = '//widget.simplybook.it/v2/widget/widget.js';
    script1.type = 'text/javascript';
    document.head.appendChild(script1);

    script1.onload = () => {
      const widget = new SimplybookWidget(config);
    };
  }

  render() {
    return (
      <section id="booking" className="booking-section">
        <div className="container">
          <div className="booking-header">
            <h2>Book an Appointment</h2>
          </div>
          <div className="booking-panel">
            <div id="simplybook-widget" className="booking-widget-frame" />
          </div>
        </div>
      </section>
    );
  }
}
