# Test with foot-data

A test project to parse data from https://www.transfermarkt.com/ to create a GraphQL API

In the src folder, you can find everything about my first try, with express and mongoose.

But mainly, there is the folder scraping containing all the scripts I used to scrape data from https://www.transfermarkt.com/.
These scripts save the html of the page scraped in the html folder. Then the scripts starting with "extract", extract
the data inside the differents html files and write JSON files in the data folder at the root of the project.

Inside the folder graphql, it's my first use of Prisma, GraphQL and Docker. It was my first scraping too.

I loved this try, and I would like opportunities to deal with it again! :)
