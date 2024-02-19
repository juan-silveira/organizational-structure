package main

import (
	"html/template"
	"net/http"
)

// Employee represents an employee in the organizational chart
type Employee struct {
	ID       string
	Name     string
	Subs     []*Employee
	IsCEO    bool
}

// Data struct for passing data to templates
type Data struct {
	Root *Employee
}

var templates = template.Must(template.ParseFiles("index.ejs", "subordinate.ejs"))

// renderTemplate is a helper function to render templates
func renderTemplate(w http.ResponseWriter, tmpl string, data Data) {
	err := templates.ExecuteTemplate(w, tmpl+".ejs", data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// addSubordinateHandler handles the addition of a subordinate
func addSubordinateHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Parse the form to get the parent ID
	err := r.ParseForm()
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	parentID := r.Form.Get("parentID")

	// Implement your logic to add a subordinate to the parent with the given ID
	// This might involve updating your data model or database
	// For this example, we'll just print the parent ID to the console
	println("Adding subordinate to parent with ID:", parentID)

	// Respond with a success message
	w.WriteHeader(http.StatusOK)
}

// deleteSubordinateHandler handles the deletion of a subordinate
func deleteSubordinateHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Parse the form to get the subordinate ID
	err := r.ParseForm()
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	subordinateID := r.Form.Get("subordinateID")

	// Implement your logic to delete the subordinate with the given ID
	// This might involve updating your data model or database
	// For this example, we'll just print the ID to the console
	println("Deleting subordinate with ID:", subordinateID)

	// Respond with a success message
	w.WriteHeader(http.StatusOK)
}

func main() {
	// Sample data for demonstration
	ceo := &Employee{
		ID:    "1",
		Name:  "CEO",
		IsCEO: true,
	}

	// Define routes
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := Data{Root: ceo}
		renderTemplate(w, "index", data)
	})

	http.HandleFunc("/addSubordinate", addSubordinateHandler)
	http.HandleFunc("/deleteSubordinate", deleteSubordinateHandler)

	// Start the HTTP server
	http.ListenAndServe(":8080", nil)
}
