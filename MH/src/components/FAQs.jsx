import React from 'react';
import { Accordion, Badge } from 'react-bootstrap';

const groupedFAQs = {
  "🍱 Menu & Upgrades": [
    {
      header: "What is on the menu?",
      body: (
        <>
          Each guest gets: Choice of 2 Proteins (<strong>Chicken, NY Strip Steak, Shrimp, Salmon, Tofu</strong>).<br />
          Includes: Fried Rice, Fresh Cooked Vegetables, Side Salad, Signature Sauce, and Sake (21+).<br /><br />
          <strong>Menu Upgrades (extra charge):</strong>
          <ul>
            <li>Stir-fried Noodles: <Badge bg="warning" text="dark">+$5</Badge></li>
            <li>Scallops: <Badge bg="warning" text="dark">+$5</Badge></li>
            <li>Filet Mignon: <Badge bg="warning" text="dark">+$5</Badge></li>
            <li>Lobster Tail: <Badge bg="warning" text="dark">+$10</Badge></li>
            <li>3rd Protein (any): <Badge bg="warning" text="dark">+$10</Badge></li>
          </ul>
        </>
      )
    },
    {
      header: "Do you offer vegetarian options?",
      body: <>Yes, we offer vegetarian and vegan options including tofu, stir-fried noodles (upgrade), and vegetables from the main menu.</>
    },
    {
      header: "Do you offer upgrades?",
      body: (
        <>
          Yes! All guests get 2 protein choices and all the sides, but we also offer upgrades:
          Filet Mignon (+$5), Lobster Tail (+$10), Scallops (+$5), Stir-fried Noodles (+$5), 3rd Protein (+$10)
        </>
      )
    },
    {
      header: "Can guests choose different proteins?",
      body: <>Yes, each guest can choose 2 proteins, and each person’s choice can vary. Our chefs can cook and serve different proteins separately.</>
    },
    {
      header: "What if someone does not eat meat?",
      body: <>We can provide tofu for vegetarian and vegan needs. The price per person does not change. We will supplement with extra veggies.</>
    },
    {
      header: "What if I need a third protein or more?",
      body: (
        <>
          Each guest selects two proteins from: <strong>Chicken, NY Strip Steak, Shrimp, Salmon, or Tofu</strong>.<br />
          <strong>Menu Upgrades:</strong>
          <ul>
            <li>Stir-fried Noodles: <Badge bg="warning" text="dark">+$5</Badge></li>
            <li>Scallops: <Badge bg="warning" text="dark">+$5</Badge></li>
            <li>Filet Mignon: <Badge bg="warning" text="dark">+$5</Badge></li>
            <li>Lobster Tail: <Badge bg="warning" text="dark">+$10</Badge></li>
            <li>3rd Protein (any): <Badge bg="warning" text="dark">+$10</Badge></li>
          </ul>
        </>
      )
    },
    {
      header: "When is the deadline to confirm the party menu (protein list)?",
      body: <>The deadline is 3 days before the party. If not received, we’ll default to chicken and steak, our most popular choices.</>
    },
    {
      header: "How should I send the protein choices list?",
      body: (
        <>
          Each guest can choose 2 proteins. The easiest way is to send an Excel sheet with columns for name, first protein, and second protein.
          Alternatively, you can send a text format like: guest1-protein1/protein2.
        </>
      )
    },
    {
      header: "What are the meal pricing and rules?",
      body: (
        <>
          <strong>Meal Rules by Age Group</strong>
          <ul>
            <li>
              <strong>Adults (13+ yrs) & Children (6-12 yrs):</strong>
              <ul>
                <li>
                  <strong>Protein Choices:</strong> 2 proteins from Chicken, NY Strip Steak, Shrimp, Salmon, Tofu
                  <br /><span className="text-muted">Default: Chicken + NY Strip Steak if no selection.</span>
                </li>
                <li>
                  <strong>Menu Upgrades (extra charge):</strong> 
                  Stir-fried Noodles, Scallops, Filet Mignon, Lobster Tail, 3rd Protein
                </li>
              </ul>
            </li>
            <li>
              <strong>Young Children (5 yrs & under):</strong>
              1 protein, half rice, no upgrades.
            </li>
          </ul>
        </>
      )
    },
  ],
  "🛒 Booking & Payments": [
    {
      header: "How do I book?",
      body: <>Click Book now on top of page or click order now on menu page.</>
    },
    {
      header: "What’s the deposit for when booking on your site?",
      body: <>We require a $100 deposit payment at booking. After your party, the chef will deduct $100 from your final bill.</>
    },
    {
      header: "Can I get a receipt or invoice for the deposit and the remaining balance?",
      body: <>Yes, contact our customer service and we’ll email your invoice.</>
    },
    {
      header: "How do I pay the tip? When should it be paid?",
      body: <>Tips are paid directly to the chef at the end of the party, via cash, Venmo, or Zelle.</>
    },
    {
      header: "Can I get an estimate?",
      body: <>Yes! Contact our customer service for a free estimate.</>
    },
    {
      header: "How much does your service cost?",
      body: <>Base: $55 per adult, $30 per child, $550 minimum spend.</>
    },
    {
      header: "Can the balance payment be made in cash? Can I pay in advance?",
      body: <>Yes, you can pay in cash after the party or in advance via Venmo/Zelle.</>
    },
    {
      header: "Can I use a coupon?",
      body: <>Confirm coupon code with customer service at least 1 day before event. Not valid Saturdays or online deposits.</>
    },
    {
      header: "What if the number of guests is less than 10?",
      body: <>Minimum spend is $550. If fewer guests, you can still book and pay to meet the minimum.</>
    },
    {
      header: "Why is a deposit required?",
      body: (
        <>
          <ol>
            <li>Reserves date/time</li>
            <li>Covers prep costs</li>
            <li>Reduces no-shows</li>
            <li>Applied to your bill</li>
            <li>Secures upgrades</li>
          </ol>
        </>
      )
    },
    {
      header: "Is the deposit amount the same for all orders?",
      body: <>Yes, it's always $100.</>
    },
    {
      header: "I'm worried about the safety of paying the deposit. What should I do?",
      body: <>We use Venmo/Zelle — encrypted and secure. Full refund if canceled 48+ hours before event.</>
    },
    {
      header: "I haven’t received a confirmation email after paying the deposit?",
      body: <>If paid via site, check for an email from contact@myhibachi.com. If paid via link, customer service will confirm manually.</>
    },
  ],
  "🪑 Setup & Logistics": [
    {
      header: "PREPARATION: What should you prepare?",
      body: (
        <>
          You should set up utensils, dinner plates, salad plates, drinks, tables, and chairs.<br />
          <strong>We bring the Chef, the Food, the Entertainment, and the FUN!</strong><br />
          <span className="text-danger">We do NOT provide any party setup.</span>
        </>
      )
    },
    {
      header: "Do you offer table and chair setup?",
      body: <>No. Please use a local rental service. See our recommendations in the footer.</>
    },
    {
      header: "How do I setup tables & chairs?",
      body: <>We recommend 2 8' tables in L-shape (10 people) or 3 6' tables in U-shape (12–15).</>
    },
    {
      header: "What should I prepare for my party?",
      body: <>Arrange space for our grill (68.3&quot;x27.5&quot;x41.3&quot;). Set up tables, chairs, plates, silverware, and drinks.</>
    },
    {
      header: "What time will the chef arrive?",
      body: <>15–30 minutes before the scheduled reservation time to set up and prepare.</>
    },
    {
      header: "What's the recommended layout for the party?",
      body: <>U-shaped setup with a space for chef to cook in the center.</>
    },
    {
      header: "Can the party be held in a garage or indoors?",
      body: <>Outdoors is preferred. Indoors possible with ventilation.</>
    }
  ],
  "💰 Pricing & Policies": [
    {
      header: "What does the total cost include?",
      body: (
        <>
          <ol>
            <li>Base: $55/adult, $30/kid, $550 min</li>
            <li>Upgrades: $5–$10</li>
            <li>Travel: First 30mi free, then $2/mi</li>
          </ol>
          <span className="text-danger">Tip not included — suggested: 20–35%</span>
        </>
      )
    },
    {
      header: "Can you tell more about fees?",
      body: <>Base cost includes everything but travel (if applicable) and tip.</>
    },
    {
      header: "Can I provide my own proteins?",
      body: <>No — we cannot cook outside food due to insurance.</>
    },
    {
      header: "Do I need to tip the chef?",
      body: <>Yes, tips are appreciated! Recommended: 20–35%</>
    },
    {
      header: "What’s your cancellation & weather policy?",
      body: <>Cancel 48+ hours ahead for full refund. Reschedule fee: $200 under 48hrs. Rain? Provide covered cooking area.</>
    },
    {
      header: "Can I have more details on kids prices?",
      body: <>Ages 6–12 = kid rate. Age 5 and under = free (1 protein + half rice).</>
    },
  ],
  "🛡️ Safety & Insurance": [
    {
      header: "Do you have insurance?",
      body: <>We can help you get party insurance from <a href="https://theeventhelper.com">theeventhelper.com</a>.</>
    },
    {
      header: "Is it safe to use propane for cooking in residential areas?",
      body: <>Yes — we use certified tanks and follow all guidelines.</>
    },
    {
      header: "What precautions are in place to prevent fire hazards?",
      body: <>Chefs are trained in fire safety and carry extinguishers.</>
    },
    {
      header: "How does My Hibachi ensure its cooking equipment is safe to use?",
      body: <>We use Blackstone griddles and inspect them before/after every use.</>
    },
    {
      header: "What steps does My Hibachi take to ensure fire safety during cooking?",
      body: <>Chefs have 5–10 years of experience and bring extinguishers to every event.</>
    },
  ],
  "❓ General Questions": [
    {
      header: "What areas do you serve?",
      body: <>We serve San Jose, San Francisco, Sacramento, and nearby areas.</>
    },
    {
      header: "Will the chef I selected be the one who comes to my event?",
      body: <>We do our best to match your request. If unavailable, a skilled substitute will be sent.</>
    },
    {
      header: "Are these parties kid friendly?",
      body: <>Yes! Let us know during booking and we’ll tailor the experience.</>
    },
    {
      header: "What can I expect after booking?",
      body: <>You’ll get a confirmation email and a call from our booking manager a week before the event.</>
    },
    {
      header: "Why is My Hibachi worth it?",
      body: (
        <ol>
          <li>Private chef services</li>
          <li>Event design</li>
          <li>Organic ingredients</li>
          <li>Fun experience</li>
          <li>Easy booking</li>
        </ol>
      )
    },
    {
      header: "What about travel fee reimbursement for remote areas?",
      body: <>Contact us. We may offer fee reimbursement based on guest count and location.</>
    },
  ]
};

const FAQs = () => (
  <div className="p-4">
    <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
    <Accordion flush>
      {Object.entries(groupedFAQs).map(([category, questions], catIdx) => (
        <Accordion.Item eventKey={catIdx.toString()} key={category}>
          <Accordion.Header>{category}</Accordion.Header>
          <Accordion.Body>
            <Accordion flush>
              {questions.map((faq, idx) => (
                <Accordion.Item eventKey={`${catIdx}-${idx}`} key={faq.header}>
                  <Accordion.Header>{faq.header}</Accordion.Header>
                  <Accordion.Body>{faq.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </div>
);

export default FAQs;
