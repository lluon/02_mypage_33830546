var http = require("http");
const port = 8000;

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  // my HTML inline code into response method
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>My vm Host Web Page</title>
      <style>
        body {

          font-family:
          "Franklin Gothic Medium",
          "Franklin Gothic",
          "ITC Franklin Gothic",
          Arial,
          sans-serif;
        
          text-transform: uppercase;
          text-align: left;
          margin: 50px;
          line-height: 20%;
          background-color: #f4f4f4;
        }
        h1 { color: #333; }
        h3 { color: #666; }
        h5 {
            color: #666;
            line-height: 120%;
            text-transform: lowercase;
            font-family:
            Arial,
            sans-serif;
        }
        a { color: #cc0000ff; text-decoration: none; }

        a:hover { text-decoration: underline; }

      </style>
    </head>
    <body>
      <h1>LUCIO LUONGO</h1>
      <br>
      <h3>WEB CODER AND CREATIVE DIRECTOR</h4>
      <p> about me: 
        <a href="https://lucioluongo.com/" target="_blank">Lucioluongo.com</a>
      </p>
            <p> more at: 
        <a href="https://www.lucioluongo.com/creative_coding/" target="_blank">creative coding</a>
      </p>
      <br>
      <h5>Born in Naples in 1972, Lucio Luongo is an accomplished art and creative director. 
          With extensive experience in Naples, Rome, Bologna, Milan, Berlin, 
          and more recently London, he has established an undisputed reputation as a leader in his field.
        <br><br>
          Lucio is an artist, programmer, and art director currently based in London, United Kingdom. 
          He specialises in creating video and interactive works that explore and transcend the boundaries 
          between music and visuals, with a thematic focus on love, death, and the vast array of emotions in between.
        <br><br>
          He has taught creative coding and media arts as a performative exploration of diverse software platforms. 
          During his tenure as the creative director of HUB Digital Labs, 
          Lucio's passion for visual interaction led him to collaborate with numerous artists, 
          including Gerald Simpson (A Guy Called Gerald), Gaudi, Jeff Mills (Axis Records), System Seven, 
          RETINA.IT (Hefty Records), Ben UFO, Gaetano Parisio (Conform, Southsoul, Adagio Records), 
          Robag Wruhme (Kompakt, Mutek), Jahcoozi (Oren Gerlitz, Robert Koch, Sasha Perera), 
          and Brando Lupi (Detune Records).
        <br><br>
          He has also worked with Avatar 41, an ensemble that includes 
          Andrea Gabriele (Clap Rules, DFA Records), Mario Masullo (Defrag, Kompakt), 
          Maurizio Martusciello, Marco Messina (99 Posse), 
          Lino Monaco and Nicola Buono (Men With Secrets, QMen, Resina, Retina.it, The Ne-21), 
          Claudio Sinatti (videomaker and visual designer for Ludovico Einaudi), 
          Maria Di Donna (99 Posse, Meg), 
          and Mattia Casalegno (Aerobanquets RMX, artist and professor of creative computing at MIT, Brooklyn).
        <br><br>
          Lucio formerly served as the Director of the Multimedia and Design module 
          at the Istituto Superiore del Design (Superior Art Design College) in Naples from 2004 to 2006. 
          During this period, he taught Desktop Publishing and Colour Theory, 
          while also coordinating experimental multimedia courses. 
          Additionally, he led an interdisciplinary team of designers, programmers, photographers, musicians, 
          and video editors to establish the pioneering company HUB Digital Labs, which operated from 1999 to 2009.
        <br><br>
          Lucio is currently dedicating himself to the study of Creative Computing at Goldsmiths, 
          University of London. Embracing this pivotal opportunity, 
          he is working hard to refine and narrow down his artistic language, 
          blending technology and creativity in his pursuit of mastery.
      </h5>
      <script>
        //  run JavaScript 
        console.log("this is me!!!! new coder on his way!!!");
      </script>
    </body>
    </html>
  `);
    res.end("Hello World!, new coder here!!!");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
