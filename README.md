# CarParkLocator Documentation

## Overview
CarParkLocator is a vanilla HTML, CSS, and JavaScript web application designed to assist users in locating carparks and searching for cadet information. It features:

1. **Carpark Search**: Input a carpark letter to find links to Google Maps.
2. **Cadet Search**: Search for a cadet's name to find their unit and contingent, using data sourced from a CSV file.

## Cadet Names CSV Schema
The application uses a CSV file named `cadet_names.csv` located in the root folder to populate the cadet search functionality. Below is the schema and format of the CSV file:

### Schema
| Column Name | Description                                |
|-------------|--------------------------------------------|
| `Names`     | Full name of the cadet                    |
| `Unit`      | The unit the cadet belongs to             |
| `Contingent`| The contingent number the cadet is part of |

### Example Data
```csv
Names,Unit,Contingent
SCT Chloe Wong,MTI,1
SCT Matthew Toh,MTI,1
SCT Nathan Lee,MTI,1
SCT Caleb Goh,MTI,1
SCT Alex Wang,MTI,1
SCT Olivia Low,MTI,1
SCT Ethan Ng,MTI,1
SCT Abigail Yeo,MTI,1
SCT Ryan Tan,MTI,1
SCT Megan Huang,MTI,1
SCT Joshua Seah,MTI,1
SCT Hannah Pang,MTI,1
```
