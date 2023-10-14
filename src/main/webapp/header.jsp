  <header>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      <i class="fa-solid fa-bars"></i>
</label>

    <ul>
      <li>
<a href="<%=request.getContextPath()%>/index.jsp">Home</a> 
</li>
      <li>
<a href="<%=request.getContextPath()%>/ground.jsp">Book Grounds</a>
</li>
      <li >
<a class="findplayers" href="<%=request.getContextPath()%>/findplayers.jsp">Find Players</a>
</li>
      <li class="contact ">
<a href="<%=request.getContextPath()%>/contact.jsp">Contact us</a>
</li>
      <li>
<a href="<%=request.getContextPath()%>/userlogin.jsp">
 <button class="login">Login</button>
</a>
</li>
    </ul>
    <a href="<%=request.getContextPath()%>/index.jsp">
<img class="logo" src="<%=request.getContextPath()%>/assets/images/Logo.png " alt="Book and play">
</a>

  </header>