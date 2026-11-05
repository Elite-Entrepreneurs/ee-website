/** One row of the city-filtered event list. */
export default function EventRow({ event, hidden }) {
  return (
    <div
      data-w-id="f173d2d7-b62e-4bf6-04e0-5ffa16ca05d6"
      style={{ opacity: 0, ...(hidden ? { display: 'none' } : null) }}
      role="listitem"
      className="collection-item w-dyn-item"
    >
      <div className="margin-top-bottom margin-52">
        <div className="event-row">
          <div id="w-node-f173d2d7-b62e-4bf6-04e0-5ffa16ca05d9-a6a2ca3f" className="date-description-container">
            <div className="date-badge-2 shadow-medium">
              <p className="paragraph-2">{event.year}</p>
              <div className="event-date-no">{event.day}</div>
              <p className="paragraph">{event.month}</p>
            </div>
            <div>
              <div className="margin-bottom margin-large">
                <div className="event-title-tag">
                  <div>
                    <h4 className="text-highlight-h1">{event.title}</h4>
                  </div>
                  <div className={`text-style-tagline sold-out${event.soldOut ? '' : ' w-condition-invisible'}`}>Sold Out</div>
                </div>
              </div>
              <div className="max-width-xsmall">
                <p className="w-dyn-bind-empty" />
              </div>
            </div>
          </div>
          <div id="w-node-_4cd6c7c4-6e81-5b13-e657-90041e6a1923-a6a2ca3f" className="event-right-col">
            <div className="col-3">
              <div className="detail-row">
                <div className="detail-container hide-desktop">
                  <img loading="lazy" src="/assets/images/icon-calendar.svg" alt="Calendar" />
                  <div>
                    <div className="div-block-8">
                      <p>{event.longDate}</p>
                    </div>
                    <div className="div-block-8">
                      <p>{event.start}</p>
                      <p>-</p>
                      <p>{event.end}</p>
                    </div>
                  </div>
                </div>
                <div className="detail-container hide-mobile-landscape">
                  <img loading="lazy" src="/assets/images/icon_time.svg" alt="Clock" />
                  <div className="div-block-8">
                    <p>{event.start}</p>
                    <p>-</p>
                    <p>{event.end}</p>
                  </div>
                </div>
                <div className="detail-container">
                  <img loading="lazy" src="/assets/images/icon_location2.svg" alt="Location marker" />
                  <div className="div-block-9">
                    <p>{event.venue}</p>
                  </div>
                </div>
                <div className="tab-hide">
                  <p>{event.city}</p>
                </div>
                <div className="detail-container">
                  <img loading="lazy" src="/assets/images/icon_price.svg" alt="Bookmark" />
                  <div className="div-block-9">
                    <p>{event.price}</p>
                  </div>
                </div>
              </div>
              <div id="w-node-_9dfa7e12-81bb-bff0-6ddc-6552fb390bd4-a6a2ca3f" className="disable-event-btn">
                <a href={`/event/${event.slug}`} className="button w-button">Event Details</a>
                <div className="link-block w-condition-invisible" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
