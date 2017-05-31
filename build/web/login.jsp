<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>

<%
    System.out.print("done");
    String userid = request.getParameter("name");
    String pwd = request.getParameter("pass");
  
    Class.forName("com.mysql.jdbc.Driver");
    Connection con = DriverManager.getConnection("jdbc:mysql://us-cdbr-azure-southcentral-f.cloudapp.net/dyname","b1f85ef75e7658","9ec9f4f5");
    Statement st = con.createStatement();
    ResultSet rs;
    
    rs = st.executeQuery("select * from members where name='" + userid +"' and pass='" + pwd + "'");
    
    if(rs.next()){
        if(request.getParameter("name").equals("Mtho") && pwd.equals("1234")){
            session.setAttribute("userid",userid);
            response.sendRedirect("Home.jsp");
            String message = (String)request.getAttribute("Wecome");
            
        }else if(!request.getParameter("name").equals("")){
            session.setAttribute("userid", userid);
            response.sendRedirect("Home.jsp");
            String message = (String)request.getAttribute("Welcome");
           
        }else{
            response.sendRedirect("Home.jsp");
            String message = (String)request.getAttribute("Invalid password <a href='index_1.jsp'>try again</a>");
        }
    }else{
        response.sendRedirect("index_1.jsp");
        String message = (String)request.getAttribute("Invalid");
    }
    System.out.print("done");
%>