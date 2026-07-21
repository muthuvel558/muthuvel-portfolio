export const projects = [
  {
    id: 1,
    type: 'Machine Learning',
    title: 'Movie Recommendation System',
    category: ['Machine Learning', 'Recommendation System'],
    shortDescription: 'Intelligent movie recommendation engine using Content-Based Filtering that suggests movies based on genres, cast, crew, and metadata similarity.',
    image: '/project_movie.png',
    gradient: 'from-brand-600 to-brand-900',
    tags: ['Python', 'Scikit-Learn', 'Streamlit', 'TMDB API'],
    detailedDescription: `Developed an intelligent movie recommendation system that suggests movies based on user preferences using Content-Based Filtering techniques. The system analyzes movie metadata such as genres, keywords, cast, crew, and overview to calculate similarity between movies using cosine similarity and TF-IDF vectorization to generate personalized recommendations. The application was built with a user-friendly Streamlit interface and integrated with the TMDB API to fetch real-time movie posters and metadata.`,
    problemStatement: `Users often struggle to find movies that match their interests due to the vast number of available choices on streaming platforms. Browsing through thousands of titles is time-consuming, and generic recommendations from platforms often miss personal preferences.`,
    solution: `Built a recommendation engine using machine learning techniques — specifically Content-Based Filtering with cosine similarity — to provide personalized movie suggestions based on the content similarity score between movies. The model processes and vectorizes text data to create a numerical representation of each movie, enabling fast and accurate similarity matching.`,
    objectives: [
      'Build an end-to-end movie recommendation pipeline',
      'Implement content-based filtering using TF-IDF and cosine similarity',
      'Integrate the TMDB API for fetching movie posters and metadata',
      'Deploy an interactive web interface using Streamlit',
      'Achieve sub-second recommendation generation speed'
    ],
    features: [
      { icon: '🔍', text: 'Search movies by title' },
      { icon: '🎬', text: 'Recommend top 10 similar movies' },
      { icon: '🤖', text: 'Content-based recommendation engine' },
      { icon: '🖼️', text: 'Poster fetching via TMDB API' },
      { icon: '⚡', text: 'Fast recommendation generation' },
      { icon: '📊', text: 'Similarity matrix visualization' }
    ],
    technologies: [
      { name: 'Python', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      { name: 'Pandas', color: 'bg-indigo-100 text-brand-700 dark:bg-brand-900/30 dark:text-indigo-300' },
      { name: 'NumPy', color: 'bg-cyan-100 text-brand-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
      { name: 'Scikit-Learn', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
      { name: 'Streamlit', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
      { name: 'TMDB API', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' }
    ],
    architecture: [
      { step: '1', label: 'Data Collection', desc: 'TMDB Movie Dataset (5000+ movies)' },
      { step: '2', label: 'Preprocessing', desc: 'Clean, merge & tokenize metadata' },
      { step: '3', label: 'Vectorization', desc: 'TF-IDF & Count Vectorizer' },
      { step: '4', label: 'Similarity', desc: 'Cosine Similarity Matrix' },
      { step: '5', label: 'Recommendation', desc: 'Top-N Similar Movies' },
      { step: '6', label: 'UI', desc: 'Streamlit Web Application' }
    ],
    challenges: [
      { challenge: 'Handling large movie metadata with missing values', solution: 'Implemented robust data cleaning pipelines using Pandas to handle null values, duplicates, and inconsistent formats.' },
      { challenge: 'Cold start problem for new users', solution: 'Used content-based filtering which relies on movie attributes rather than user history, bypassing the cold start issue entirely.' },
      { challenge: 'TMDB API rate limiting', solution: 'Implemented caching and request throttling to stay within API rate limits while fetching real-time poster data.' }
    ],
    outcomes: [
      '5000+ movies indexed and searchable',
      'Sub-second recommendation speed',
      'Top-10 similar movie suggestions per query',
      'Interactive poster-based UI via TMDB API',
      'Successfully deployed on Streamlit Cloud'
    ],
    futureEnhancements: [
      'Integrate collaborative filtering for hybrid recommendations',
      'Add user login and personal watchlist feature',
      'Implement ratings-based model refinement',
      'Deploy as a full-stack web application with FastAPI backend'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    type: 'Full Stack',
    title: 'Personal Portfolio Website',
    category: ['Full Stack Web Development'],
    shortDescription: 'Modern, responsive developer portfolio built with React.js, Tailwind CSS, and Framer Motion with dark/light mode and smooth animations.',
    image: '/project_portfolio.png',
    gradient: 'from-brand-600 to-pink-700',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    detailedDescription: `Designed and developed a modern, responsive portfolio website to showcase my skills, projects, experience, and achievements. The website serves as my professional online presence and personal brand. Built with React.js and Tailwind CSS for a component-based, maintainable codebase and integrated Framer Motion for rich, scroll-triggered animations and smooth page transitions.`,
    problemStatement: `Recruiters and clients need a centralized, professional platform to explore a developer's skills, experience, and projects. A generic LinkedIn profile or simple resume is not enough to showcase technical capabilities and design sensibility.`,
    solution: `Created a fast, responsive, and visually appealing portfolio website with modern UI, interactive animations, dark/light mode support, and a modular component architecture that makes it easy to maintain and update.`,
    objectives: [
      'Build a fully responsive portfolio usable on all devices',
      'Implement a dark/light mode toggle with smooth transitions',
      'Showcase projects, skills, experience, and contact details',
      'Add Framer Motion animations for a premium user experience',
      'Achieve fast load times and good SEO practices'
    ],
    features: [
      { icon: '📱', text: 'Fully responsive design' },
      { icon: '🌙', text: 'Dark and light mode toggle' },
      { icon: '✨', text: 'Animated hero with typing effect' },
      { icon: '🗂️', text: 'Detailed project showcase' },
      { icon: '📋', text: 'Resume download button' },
      { icon: '📧', text: 'Contact section' }
    ],
    technologies: [
      { name: 'React.js', color: 'bg-cyan-100 text-brand-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
      { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300' },
      { name: 'Framer Motion', color: 'bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300' },
      { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
      { name: 'Vite', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
      { name: 'React Icons', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300' }
    ],
    architecture: [
      { step: '1', label: 'Component Design', desc: 'Modular JSX components' },
      { step: '2', label: 'Styling', desc: 'Tailwind CSS utility classes' },
      { step: '3', label: 'Animation', desc: 'Framer Motion transitions' },
      { step: '4', label: 'State Mgmt', desc: 'React useState & useEffect' },
      { step: '5', label: 'Build', desc: 'Vite production bundler' },
      { step: '6', label: 'Deploy', desc: 'Vercel / GitHub Pages' }
    ],
    challenges: [
      { challenge: 'Achieving smooth scroll-triggered animations', solution: 'Used Framer Motion\'s `whileInView` and `viewport` props to trigger animations precisely as elements enter the viewport.' },
      { challenge: 'Dark/light mode flicker on load', solution: 'Applied the dark class to the HTML root element via useEffect, preventing any flash of unstyled content on initial render.' },
      { challenge: 'Managing multiple React icons packages', solution: 'Used a consistent import strategy from `react-icons/fa`, `react-icons/si`, and `react-icons/fi` to keep icon imports organized and performant.' }
    ],
    outcomes: [
      'Fully functional portfolio deployed online',
      'Responsive across mobile, tablet, and desktop',
      'Smooth animations throughout all sections',
      'Dark/light mode working across all components',
      'Professional online presence established'
    ],
    futureEnhancements: [
      'Add a functional contact form with EmailJS or Formspree',
      'Integrate a blog section with MDX for article writing',
      'Add page transition animations between sections',
      'Implement SEO metadata with React Helmet'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    type: 'Machine Learning',
    title: 'AI Chatbot Application',
    category: ['Artificial Intelligence', 'Generative AI'],
    shortDescription: 'Intelligent conversational AI chatbot powered by Large Language Models, capable of context-aware multi-topic responses via NLP and API integration.',
    image: '/project_chatbot.png',
    gradient: 'from-blue-700 to-brand-900',
    tags: ['Python', 'LLM APIs', 'NLP', 'Streamlit'],
    detailedDescription: `Developed an AI-powered chatbot capable of understanding and responding to user queries using Large Language Models (LLMs) and Natural Language Processing techniques. The chatbot maintains conversation context across multiple turns, enabling coherent, human-like dialogue. The system was built with a FastAPI backend for the API layer and a Streamlit frontend for the interactive chat interface.`,
    problemStatement: `Users require intelligent conversational systems that can provide instant assistance and answer queries efficiently. Traditional rule-based chatbots are rigid and fail to understand nuanced user intent or maintain conversational context.`,
    solution: `Built a chatbot application integrated with LLM APIs (OpenAI/Gemini) to provide human-like responses with conversational memory. The backend uses FastAPI to handle API requests, and the frontend uses Streamlit to provide a clean, interactive chat UI.`,
    objectives: [
      'Build a context-aware, multi-turn conversational AI chatbot',
      'Integrate with LLM APIs for intelligent response generation',
      'Implement conversation history management',
      'Deploy an interactive chat interface using Streamlit',
      'Handle multi-topic questions across various domains'
    ],
    features: [
      { icon: '💬', text: 'Natural language conversations' },
      { icon: '🧠', text: 'Context-aware multi-turn responses' },
      { icon: '🌐', text: 'Multi-topic question answering' },
      { icon: '🖥️', text: 'Interactive Streamlit chat UI' },
      { icon: '🔗', text: 'LLM API integration' },
      { icon: '💾', text: 'Conversation history memory' }
    ],
    technologies: [
      { name: 'Python', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      { name: 'LLM APIs', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
      { name: 'NLP', color: 'bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300' },
      { name: 'Streamlit', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
      { name: 'FastAPI', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300' },
      { name: 'REST API', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' }
    ],
    architecture: [
      { step: '1', label: 'User Input', desc: 'Streamlit chat interface' },
      { step: '2', label: 'NLP Parsing', desc: 'Tokenize & process text' },
      { step: '3', label: 'Context Mgmt', desc: 'Conversation history store' },
      { step: '4', label: 'LLM API', desc: 'Request to GPT / Gemini' },
      { step: '5', label: 'Response', desc: 'Generate AI response text' },
      { step: '6', label: 'Display', desc: 'Render in chat UI' }
    ],
    challenges: [
      { challenge: 'Managing multi-turn conversation context', solution: 'Implemented a sliding window conversation buffer that stores the last N exchanges as context, sending them with each new API request to maintain coherence.' },
      { challenge: 'API latency and response delays', solution: 'Added streaming response support with Streamlit\'s `st.write_stream` to progressively render the chatbot reply as it is generated.' },
      { challenge: 'Handling diverse user queries', solution: 'Implemented a system prompt engineering approach that guides the LLM to stay on-topic and handle edge cases gracefully with fallback responses.' }
    ],
    outcomes: [
      'Fully functional multi-turn conversational chatbot',
      'Integrated with LLM API for human-like responses',
      'Context maintained across 10+ conversation turns',
      'Sub-2 second response time with streaming',
      'Successfully tested across 50+ diverse topics'
    ],
    futureEnhancements: [
      'Add voice input/output using Web Speech API',
      'Implement RAG (Retrieval Augmented Generation) for domain-specific knowledge',
      'Add user authentication and personalized chat history',
      'Fine-tune on domain-specific datasets for specialized use cases'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    type: 'Machine Learning',
    title: 'House Price Prediction',
    category: ['Machine Learning', 'Regression'],
    shortDescription: 'Linear regression model to predict house prices using property features with data preprocessing and comprehensive model evaluation.',
    image: '/project_movie.png',
    gradient: 'from-amber-600 to-orange-900',
    tags: ['Python', 'Scikit-Learn', 'Linear Regression', 'Pandas'],
    detailedDescription: `Built a regression model to predict house prices using property features with data preprocessing and model evaluation. The model uses Linear Regression to learn the relationship between house attributes such as area, number of rooms, location, and amenities with the target variable — house price.`,
    problemStatement: `Buyers and sellers often struggle to determine fair market prices for residential properties. Manual price estimation is subjective and inconsistent.`,
    solution: `Developed a machine learning model trained on historical property data to predict house prices accurately based on measurable features.`,
    objectives: [
      'Build and train a Linear Regression model on housing dataset',
      'Perform feature engineering and data preprocessing',
      'Evaluate the model using RMSE and R² score',
      'Visualize feature importance and prediction results'
    ],
    features: [
      { icon: '🏠', text: 'House price prediction' },
      { icon: '📊', text: 'Feature engineering & preprocessing' },
      { icon: '📉', text: 'Model evaluation (RMSE, R²)' },
      { icon: '📈', text: 'Prediction visualization' },
      { icon: '🔄', text: 'Data normalization pipeline' },
      { icon: '📋', text: 'Correlation analysis' }
    ],
    technologies: [
      { name: 'Python', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      { name: 'Pandas', color: 'bg-indigo-100 text-brand-700 dark:bg-brand-900/30 dark:text-indigo-300' },
      { name: 'NumPy', color: 'bg-cyan-100 text-brand-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
      { name: 'Scikit-Learn', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
      { name: 'Matplotlib', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      { name: 'Seaborn', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300' }
    ],
    architecture: [
      { step: '1', label: 'Dataset', desc: 'Housing features dataset' },
      { step: '2', label: 'EDA', desc: 'Exploratory data analysis' },
      { step: '3', label: 'Preprocessing', desc: 'Clean, encode & normalize' },
      { step: '4', label: 'Model Training', desc: 'Linear Regression fit' },
      { step: '5', label: 'Evaluation', desc: 'RMSE & R² metrics' },
      { step: '6', label: 'Visualization', desc: 'Prediction plots & insights' }
    ],
    challenges: [
      { challenge: 'Handling outliers and skewed price distribution', solution: 'Applied log transformation to the target variable and IQR-based outlier removal to normalize the distribution.' },
      { challenge: 'Multicollinearity between features', solution: 'Used correlation matrix analysis to identify and remove highly correlated features, improving model stability.' }
    ],
    outcomes: [
      'Achieved R² score of 0.85 on test data',
      'RMSE within acceptable range for the dataset',
      'Identified top 5 most price-influencing features',
      'Visualized prediction vs actual price plots'
    ],
    futureEnhancements: [
      'Experiment with Ridge, Lasso, and Gradient Boosting models',
      'Add geospatial features (proximity to schools, hospitals)',
      'Build a web app for end-user price estimation'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 6,
    type: 'Machine Learning',
    title: 'Employee Attrition Prediction',
    category: ['Machine Learning', 'Classification'],
    shortDescription: 'Logistic Regression model to identify employees at risk of attrition using HR data with feature analysis and model evaluation.',
    image: '/project_movie.png',
    gradient: 'from-rose-600 to-pink-900',
    tags: ['Python', 'Logistic Regression', 'Pandas', 'Scikit-Learn'],
    detailedDescription: `Created a predictive model to identify employees at risk of leaving the organization using HR data. The model applies Logistic Regression on features such as satisfaction level, last evaluation score, number of projects, average monthly hours, and time spent at the company. The system helps HR departments take proactive retention measures.`,
    problemStatement: `High employee turnover is costly for organizations. Identifying employees likely to leave in advance allows HR teams to intervene before losing valuable talent.`,
    solution: `Built a Logistic Regression classification model trained on IBM HR Analytics dataset to predict attrition probability, providing a ranked list of at-risk employees.`,
    objectives: [
      'Build a binary classification model for attrition prediction',
      'Perform EDA to identify key attrition drivers',
      'Evaluate using accuracy, precision, recall, and F1-score',
      'Visualize feature importance for HR insights'
    ],
    features: [
      { icon: '👤', text: 'Employee attrition risk scoring' },
      { icon: '📊', text: 'Feature importance analysis' },
      { icon: '🏷️', text: 'Binary classification output' },
      { icon: '📉', text: 'Confusion matrix & ROC curve' },
      { icon: '🔄', text: 'Data preprocessing pipeline' },
      { icon: '💡', text: 'HR-actionable insights' }
    ],
    technologies: [
      { name: 'Python', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      { name: 'Pandas', color: 'bg-indigo-100 text-brand-700 dark:bg-brand-900/30 dark:text-indigo-300' },
      { name: 'NumPy', color: 'bg-cyan-100 text-brand-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
      { name: 'Scikit-Learn', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
      { name: 'Matplotlib', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      { name: 'Seaborn', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300' }
    ],
    architecture: [
      { step: '1', label: 'HR Dataset', desc: 'IBM HR Analytics data' },
      { step: '2', label: 'EDA', desc: 'Explore attrition patterns' },
      { step: '3', label: 'Preprocessing', desc: 'Encode & normalize features' },
      { step: '4', label: 'Model Training', desc: 'Logistic Regression fit' },
      { step: '5', label: 'Evaluation', desc: 'Accuracy, F1, ROC-AUC' },
      { step: '6', label: 'Insights', desc: 'Feature importance report' }
    ],
    challenges: [
      { challenge: 'Imbalanced attrition vs non-attrition classes', solution: 'Applied SMOTE (Synthetic Minority Oversampling) to balance the dataset and improve recall for the minority attrition class.' },
      { challenge: 'Identifying the most impactful HR features', solution: 'Used coefficient analysis and feature importance plots to rank variables by their influence on attrition probability.' }
    ],
    outcomes: [
      'Achieved 87% accuracy on test data',
      'Identified top 5 attrition risk factors',
      'ROC-AUC score of 0.88',
      'Enabled proactive HR intervention planning'
    ],
    futureEnhancements: [
      'Build an interactive HR dashboard with Streamlit',
      'Experiment with Random Forest and XGBoost classifiers',
      'Add real-time employee risk scoring via REST API'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 7,
    type: 'Machine Learning',
    title: 'Product Demand Forecasting using LSTM',
    category: ['Deep Learning', 'Time Series'],
    shortDescription: 'LSTM-based deep learning model to forecast product demand from historical sales data for inventory and supply chain optimization.',
    image: '/project_chatbot.png',
    gradient: 'from-emerald-600 to-teal-900',
    tags: ['Python', 'LSTM', 'TensorFlow', 'Time Series'],
    detailedDescription: `Developed an LSTM-based deep learning model to forecast product demand from historical sales data. The model learns sequential temporal patterns from time-series sales records and generates accurate multi-step demand forecasts. This enables businesses to optimize inventory levels and reduce stockouts or overstock situations.`,
    problemStatement: `Inaccurate demand forecasting leads to either stockouts or excess inventory, both of which are costly for businesses. Traditional statistical methods struggle with non-linear, seasonal time-series patterns.`,
    solution: `Built a Long Short-Term Memory (LSTM) neural network that captures long-range temporal dependencies in historical sales data, enabling accurate multi-step demand forecasting.`,
    objectives: [
      'Build an LSTM model for multi-step time series forecasting',
      'Preprocess and normalize historical sales data',
      'Train the model on sliding window sequences',
      'Evaluate using MAE, RMSE, and MAPE metrics',
      'Visualize actual vs predicted demand curves'
    ],
    features: [
      { icon: '📈', text: 'Multi-step demand forecasting' },
      { icon: '🧠', text: 'LSTM deep learning architecture' },
      { icon: '🔄', text: 'Sliding window preprocessing' },
      { icon: '📉', text: 'MAE, RMSE, MAPE evaluation' },
      { icon: '📅', text: 'Seasonality & trend capture' },
      { icon: '🗂️', text: 'Historical sales data pipeline' }
    ],
    technologies: [
      { name: 'Python', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      { name: 'TensorFlow', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
      { name: 'Keras', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
      { name: 'NumPy', color: 'bg-cyan-100 text-brand-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
      { name: 'Pandas', color: 'bg-indigo-100 text-brand-700 dark:bg-brand-900/30 dark:text-indigo-300' },
      { name: 'Matplotlib', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' }
    ],
    architecture: [
      { step: '1', label: 'Sales Data', desc: 'Historical time series records' },
      { step: '2', label: 'Preprocessing', desc: 'Normalize & create windows' },
      { step: '3', label: 'LSTM Model', desc: 'Sequential memory layers' },
      { step: '4', label: 'Training', desc: 'Fit on train sequences' },
      { step: '5', label: 'Forecasting', desc: 'Multi-step predictions' },
      { step: '6', label: 'Evaluation', desc: 'MAE, RMSE, MAPE metrics' }
    ],
    challenges: [
      { challenge: 'Handling missing and irregular time-series data', solution: 'Applied forward-fill imputation and resampling to create a uniform daily time series before feeding it to the LSTM model.' },
      { challenge: 'Overfitting on small datasets', solution: 'Used Dropout layers after each LSTM layer and Early Stopping callback to prevent overfitting during training.' }
    ],
    outcomes: [
      'Achieved MAPE of under 8% on test data',
      'Successfully forecasted 30-day demand windows',
      'Captured seasonal and weekly sales patterns',
      'Visualized actual vs predicted demand plots'
    ],
    futureEnhancements: [
      'Experiment with Transformer-based time series models',
      'Add external features (promotions, holidays) for improved accuracy',
      'Deploy as a REST API for real-time demand forecasting'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 8,
    type: 'Machine Learning',
    title: 'Customer Purchase Prediction',
    category: ['Machine Learning', 'Classification'],
    shortDescription: 'Logistic Regression classification model to predict customer purchasing behavior based on demographic and behavioral data.',
    image: '/project_portfolio.png',
    gradient: 'from-sky-600 to-blue-900',
    tags: ['Python', 'Logistic Regression', 'Scikit-Learn', 'EDA'],
    detailedDescription: `Developed a classification model to predict whether a customer will make a purchase based on demographic (age, income, gender) and behavioral (browsing history, time on site, past purchases) data. The model was built using Logistic Regression and evaluated on precision, recall, and AUC-ROC metrics.`,
    problemStatement: `E-commerce businesses lose revenue by targeting all customers equally. Predicting which customers are likely to purchase allows focused marketing and personalized offers.`,
    solution: `Built a Logistic Regression model trained on customer behavioral and demographic data to classify customers into likely-to-buy and unlikely-to-buy segments, enabling targeted marketing strategies.`,
    objectives: [
      'Build a binary classification model for purchase prediction',
      'Perform EDA to understand customer behavior patterns',
      'Engineer relevant features from raw behavioral data',
      'Evaluate model using precision, recall, and AUC-ROC'
    ],
    features: [
      { icon: '🛒', text: 'Purchase probability scoring' },
      { icon: '👥', text: 'Demographic & behavioral features' },
      { icon: '📊', text: 'EDA & visualization' },
      { icon: '🎯', text: 'Targeted customer segmentation' },
      { icon: '📉', text: 'ROC-AUC evaluation' },
      { icon: '🔄', text: 'Feature engineering pipeline' }
    ],
    technologies: [
      { name: 'Python', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
      { name: 'Pandas', color: 'bg-indigo-100 text-brand-700 dark:bg-brand-900/30 dark:text-indigo-300' },
      { name: 'Scikit-Learn', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
      { name: 'NumPy', color: 'bg-cyan-100 text-brand-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
      { name: 'Seaborn', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300' },
      { name: 'Matplotlib', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' }
    ],
    architecture: [
      { step: '1', label: 'Customer Data', desc: 'Demographic & behavioral data' },
      { step: '2', label: 'EDA', desc: 'Explore purchase patterns' },
      { step: '3', label: 'Feature Engg.', desc: 'Encode & scale features' },
      { step: '4', label: 'Model Training', desc: 'Logistic Regression fit' },
      { step: '5', label: 'Evaluation', desc: 'Precision, Recall, AUC' },
      { step: '6', label: 'Segmentation', desc: 'High/low intent customers' }
    ],
    challenges: [
      { challenge: 'Class imbalance between purchasers and non-purchasers', solution: 'Applied class_weight="balanced" parameter in Logistic Regression to handle imbalance without oversampling.' },
      { challenge: 'Selecting relevant features from high-dimensional data', solution: 'Used Recursive Feature Elimination (RFE) to select the top 10 most predictive features, reducing noise and improving generalization.' }
    ],
    outcomes: [
      'Achieved 83% accuracy on test data',
      'AUC-ROC score of 0.87',
      'Identified top behavioral predictors of purchase intent',
      'Segmented customers into high and low intent groups'
    ],
    futureEnhancements: [
      'Test with ensemble models (XGBoost, Random Forest)',
      'Build a real-time scoring API for e-commerce integration',
      'Add A/B testing framework to measure campaign ROI'
    ],
    github: '#',
    demo: '#'
  }
];
