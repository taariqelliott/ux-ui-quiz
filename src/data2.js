const data = [
    {
      question: "What does UX stand for?",
      incorrectAnswers: ["User Interface", "User Engagement"],
      correctAnswer: "User Experience"
    },
    {
      question: "What is the purpose of wireframing in the design process?",
      incorrectAnswers: [
        "To add visual aesthetics to the design",
        "To create a high-fidelity prototype"
      ],
      correctAnswer: "To outline the layout and structure of the design"
    },
    {
      question: "Which color scheme is characterized by using only one color and its shades?",
      incorrectAnswers: ["Analogous", "Complementary"],
      correctAnswer: "Monochromatic"
    },
    {
      question: "What does UI stand for?",
      incorrectAnswers: ["User Interaction", "User Involvement"],
      correctAnswer: "User Interface"
    },
    {
      question: "What is the primary goal of usability testing?",
      incorrectAnswers: [
        "To identify visual design flaws",
        "To evaluate the loading speed of the design"
      ],
      correctAnswer: "To assess how easily users can complete tasks"
    },
    {
      question: "What is the purpose of a mood board in the design process?",
      incorrectAnswers: ["To organize user feedback", "To track design progress"],
      correctAnswer: "To showcase visual design options"
    },
    {
      question: "Which design principle focuses on maintaining consistency in visual elements?",
      incorrectAnswers: ["Hierarchy", "Proximity"],
      correctAnswer: "Unity"
    },
    {
      question: "What is the difference between UI and UX?",
      incorrectAnswers: [
        "UI is about the overall user experience, while UX is about visual elements.",
        "UI and UX are the same concepts."
      ],
      correctAnswer:
        "UI is about visual elements, while UX is about the overall user experience."
    },
    {
      question: "Which file format is best for delivering high-quality graphics for web design?",
      incorrectAnswers: ["JPEG", "GIF"],
      correctAnswer: "PNG"
    },
    {
      question: "What is the main objective of card sorting in UX design?",
      incorrectAnswers: [
        "To test different color schemes",
        "To gather user feedback on a design"
      ],
      correctAnswer: "To organize content and improve information architecture"
    },
    {
      question: "In the design thinking process, which phase involves empathizing with the users?",
      incorrectAnswers: ["Ideation", "Prototyping"],
      correctAnswer: "Empathize"
    },
    {
      question: "Which type of user research involves observing users in their natural environment?",
      incorrectAnswers: ["Surveys", "Focus groups"],
      correctAnswer: "Field studies"
    },
    {
      question: "What is the purpose of A/B testing in UX design?",
      incorrectAnswers: [
        "To gather qualitative user feedback",
        "To assess the loading speed of a design"
      ],
      correctAnswer: "To compare two different design concepts"
    },
    {
      question: "Which design principle focuses on creating clear visual paths for users?",
      incorrectAnswers: ["Contrast", "Proximity"],
      correctAnswer: "Hierarchy"
    },
    {
      question: "What is the main goal of conducting a heuristic evaluation?",
      incorrectAnswers: [
        "To gather user feedback on a design",
        "To evaluate the loading speed of a design"
      ],
      correctAnswer:
        "To identify usability issues based on established principles"
    },
    {
      question: "Which research method involves studying user behaviors and preferences through data analysis?",
      incorrectAnswers: ["Qualitative research", "Ethnographic research"],
      correctAnswer: "Quantitative research"
    },
    {
      question: "Which element of the design should be prioritized to improve accessibility for users with disabilities?",
      incorrectAnswers: ["Color scheme", "Navigation structure"],
      correctAnswer: "Typography"
    },
    {
      question: "What does 'responsive design' mean?",
      incorrectAnswers: [
        "Designing for different user personas",
        "Designing with empathy for users"
      ],
      correctAnswer: "Designing for various screen sizes and devices"
    },
    {
      question: "What is the purpose of the 'Golden Ratio' in design?",
      incorrectAnswers: [
        "To define the brand color palette",
        "To establish a grid system for the design"
      ],
      correctAnswer: "To create balanced and visually pleasing layouts"
    },
    {
      question: "Which prototyping fidelity is characterized by a basic representation of the design without detailed visuals?",
      incorrectAnswers: ["Medium-fidelity prototype", "High-fidelity prototype"],
      correctAnswer: "Low-fidelity prototype"
    },
    {
      question: "According to Apple's HIG, what is the recommended minimum touch target size for interactive elements on iOS devices?",
      incorrectAnswers: ["20x20 pixels", "40x40 pixels"],
      correctAnswer: "30x30 pixels"
    },
    {
      question: "Which design principle from Apple's HIG emphasizes the importance of clear, consistent, and intuitive navigation?",
      incorrectAnswers: ["Efficiency", "Clarity"],
      correctAnswer: "Navigation"
    },
    {
      question: "According to Apple's HIG, what is the recommended duration for displaying splash screens during app launch?",
      incorrectAnswers: ["2 seconds", "1 second"],
      correctAnswer: "3 seconds"
    },
    {
      question: "What is the recommended font size for body text in iOS app designs, as per Apple's HIG?",
      incorrectAnswers: ["12 points", "16 points"],
      correctAnswer: "14 points"
    },
    {
      question: "According to Apple's HIG, what is the primary focus for designing the layout of an iOS app?",
      incorrectAnswers: ["Visual appeal", "Animation effects"],
      correctAnswer: "Usability and clarity"
    },
    {
      question: "In Apple's HIG, what term is used to describe the visual element that represents an app on the iOS home screen?",
      incorrectAnswers: ["Logo", "Widget"],
      correctAnswer: "Icon"
    },
    {
      question: "Which accessibility feature, as recommended by Apple's HIG, allows users to control their device using voice commands?",
      incorrectAnswers: ["Switch Control", "Siri"],
      correctAnswer: "VoiceOver"
    },
    {
      question: "According to Apple's HIG, what is the suggested maximum length for a user-visible label on iOS?",
      incorrectAnswers: ["10 characters", "30 characters"],
      correctAnswer: "20 characters"
    },
    {
      question: "Which design principle from Apple's HIG encourages designers to use a consistent grid system for alignment and layout?",
      incorrectAnswers: ["Consistency", "Hierarchy"],
      correctAnswer: "Alignment"
    },
    {
      question: "According to Apple's HIG, what is the recommended minimum contrast ratio between text and its background for optimal legibility?",
      incorrectAnswers: ["3:1", "7:1"],
      correctAnswer: "4.5:1"
    },
    {
      question: "In Apple's HIG, what term is used to describe the visual effect that occurs when a user taps an interactive element?",
      incorrectAnswers: ["Press effect", "Tap effect"],
      correctAnswer: "Touch effect"
    },
    {
      question: "Which design element, as recommended by Apple's HIG, helps users understand their current location within an app's hierarchy?",
      incorrectAnswers: ["Tab bar", "Navigation bar"],
      correctAnswer: "Status bar"
    },
    {
      question: "According to Apple's HIG, what is the recommended size for app icon assets for iOS devices with high-resolution displays?",
      incorrectAnswers: ["120x120 pixels", "60x60 pixels"],
      correctAnswer: "180x180 pixels"
    },
    {
      question: "Which accessibility feature, as recommended by Apple's HIG, provides audible descriptions of on-screen elements to assist users with visual impairments?",
      incorrectAnswers: ["Switch Control", "Guided Access"],
      correctAnswer: "VoiceOver"
    },
    {
      question: "According to Apple's HIG, what is the suggested maximum duration for microinteractions such as button animations?",
      incorrectAnswers: ["0.5 seconds", "1 second"],
      correctAnswer: "0.2 seconds"
    },
    {
      question: "Which type of control, as per Apple's HIG, is used to gather textual input from users in a single line?",
      incorrectAnswers: ["Text view", "Stepper"],
      correctAnswer: "Text field"
    },
    {
      question: "According to Apple's HIG, what is the recommended padding or spacing between interactive elements to avoid accidental taps?",
      incorrectAnswers: ["10 points", "15 points"],
      correctAnswer: "5 points"
    },
    {
      question: "In Apple's HIG, what term is used to describe the behavior where content bounces back when users reach the end of a scrollable area?",
      incorrectAnswers: ["Elastic scrolling", "Snap scrolling"],
      correctAnswer: "Rubber banding"
    },
    {
      question: "According to Apple's HIG, what is the recommended duration for a standard app transition animation?",
      incorrectAnswers: ["0.2 seconds", "1 second"],
      correctAnswer: "0.5 seconds"
    },
    {
      question: "Which accessibility feature, as recommended by Apple's HIG, enables users to control their device using physical switches or assistive devices?",
      incorrectAnswers: ["VoiceOver", "Siri"],
      correctAnswer: "Switch Control"
    }
  ];
  
  export default data;
  