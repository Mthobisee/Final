/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author mthobisi
 */
@WebServlet("/Chats")
public class Chats extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ArrayList<Text> cat = new ArrayList<Text>();
        try {
            cat = FetchChats.getAllCountriess();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(cat,new TypeToken<List<FetchChats>>() {}.getType());
        
        JsonArray jsonArray = element.getAsJsonArray();
        response.setContentType("applications/json");
        response.getWriter().print(jsonArray);
    }
}
